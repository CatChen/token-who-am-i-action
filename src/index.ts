import type { ResultOf } from '@graphql-typed-document-node/core';
import { getInput, notice, setFailed, setOutput } from '@actions/core';
import { graphql } from './__graphql__/gql.js';
import { getOctokit } from './getOctokit.js';

const queryViewerIdentity = graphql(`
  query ViewerIdentity {
    viewer {
      login
      globalId: id
    }
  }
`);

const queryBotAppSlug = graphql(`
  query BotAppSlug($globalId: ID!) {
    node(id: $globalId) {
      id
      ... on Bot {
        appSlug: login
      }
    }
  }
`);

export type User = {
  login: string;
  globalId: string;
  id: number;
  /**
   * May be `undefined` if the user has not set a name.
   */
  name?: string;
  /**
   * May be `undefined` if the user chose to hide their email.
   */
  email?: string;
  scopes?: Array<string>;
  type: 'User';
};

export type Bot = {
  login: string;
  appSlug: string;
  globalId: string;
  id: number;
  name: string;
  email: string;
  type: 'Bot';
};

export type Actor = User | Bot;

export async function tokenWhoAmI({
  githubToken,
}: {
  githubToken: string;
}): Promise<Actor> {
  const octokit = getOctokit(githubToken);

  const {
    viewer: { login, globalId },
  } = await octokit.graphql<ResultOf<typeof queryViewerIdentity>>(
    queryViewerIdentity.toString(),
    {},
  );

  notice(`Login: ${login}`);
  setOutput('login', login);
  notice(`Global ID: ${globalId}`);
  setOutput('global-id', globalId);

  const {
    headers: { 'x-oauth-scopes': xOauthScopes },
    data: { id, name, email, type },
  } = await octokit.rest.users.getByUsername({ username: login });

  notice(`Id: ${id}`);
  setOutput('id', id);
  notice(`Name: ${name}`);
  setOutput('name', name);
  notice(`Email: ${email}`);
  setOutput('email', email);
  notice(`Type: ${type}`);
  setOutput('type', type);

  if (type === 'User') {
    const scopes =
      xOauthScopes?.split(',').map((scope) => scope.trim()) ?? undefined;
    if (scopes !== undefined) {
      notice(`Scopes: ${xOauthScopes}`);
      setOutput('scopes', xOauthScopes);
    }

    return {
      login,
      globalId,
      id,
      name: name ?? undefined,
      email: email ?? undefined,
      scopes,
      type,
    };
  } else if (type === 'Bot') {
    const { node } = await octokit.graphql<ResultOf<typeof queryBotAppSlug>>(
      queryBotAppSlug.toString(),
      {
        globalId,
      },
    );

    if (!node || node.__typename !== 'Bot') {
      throw new Error(`Failed to resolve app slug from bot node: ${globalId}.`);
    }

    const { appSlug } = node;

    notice(`App Slug: ${appSlug}`);
    setOutput('app-slug', appSlug);

    const appResponse = await octokit.rest.apps.getBySlug({
      app_slug: appSlug,
    });

    if (!appResponse.data) {
      throw new Error(`App not found for slug: ${appSlug}.`);
    }

    const { name: botName } = appResponse.data;

    notice(`Bot Name: ${botName}`);
    setOutput('name', botName);

    const botEmail = `${id}+${login}@users.noreply.github.com`;
    notice(`Bot Email: ${botEmail}`);
    setOutput('email', botEmail);

    return {
      login,
      appSlug,
      globalId,
      id,
      name: botName,
      email: botEmail,
      type,
    };
  } else {
    throw new Error(`Unsupported type: ${type}`);
  }
}

async function run(): Promise<void> {
  const githubToken = getInput('github-token');
  await tokenWhoAmI({ githubToken });
}

run().catch((error: Error) => setFailed(error));
