import { getInput, notice, setFailed, setOutput } from '@actions/core';
import { getOctokit } from './getOctokit.js';

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

export async function tokenWhoAmI(githubToken: string): Promise<Actor> {
  const octokit = getOctokit(githubToken);

  const {
    viewer: { login, global_id: globalId },
  } = await octokit.graphql<{ viewer: { login: string; global_id: string } }>(
    `
      query {
        viewer {
          login
          global_id: id
        }
      }
    `,
    {},
  );

  notice(`Login: ${login}`);
  setOutput('login', login);
  notice(`Global ID: ${globalId}`);
  setOutput('global-id', globalId);

  const {
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
    return {
      login,
      globalId,
      id,
      name: name ?? undefined,
      email: email ?? undefined,
      type,
    };
  } else if (type === 'Bot') {
    const {
      node: { bot_login: appSlug },
    } = await octokit.graphql<{ node: { bot_login: string } }>(
      `
        query($global_id: ID!) {
          node(id: $global_id) {
            ... on Bot{
              bot_login: login
            }
          }
        }
      `,
      {
        global_id: globalId,
      },
    );

    notice(`App Slug: ${appSlug}`);
    setOutput('app-slug', appSlug);

    const {
      data: { name: botName },
    } = await octokit.rest.apps.getBySlug({ app_slug: appSlug });

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
  await tokenWhoAmI(githubToken);
}

run().catch((error: Error) => setFailed(error));
