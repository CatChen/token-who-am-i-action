var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getInput, notice, setFailed, setOutput } from '@actions/core';
import { getOctokit } from './getOctokit.js';
export function tokenWhoAmI(githubToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const octokit = getOctokit(githubToken);
        const { viewer: { login, global_id: globalId }, } = yield octokit.graphql(`
      query {
        viewer {
          login
          global_id: id
        }
      }
    `, {});
        notice(`Login: ${login}`);
        setOutput('login', login);
        notice(`Global ID: ${globalId}`);
        setOutput('global-id', globalId);
        const { data: { id, name, email, type }, } = yield octokit.rest.users.getByUsername({ username: login });
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
                name: name !== null && name !== void 0 ? name : undefined,
                email: email !== null && email !== void 0 ? email : undefined,
                type,
            };
        }
        else if (type === 'Bot') {
            const { node: { bot_login: appSlug }, } = yield octokit.graphql(`
        query($global_id: ID!) {
          node(id: $global_id) {
            ... on Bot{
              bot_login: login
            }
          }
        }
      `, {
                global_id: globalId,
            });
            notice(`App Slug: ${appSlug}`);
            setOutput('app-slug', appSlug);
            const { data: { name: botName }, } = yield octokit.rest.apps.getBySlug({ app_slug: appSlug });
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
        }
        else {
            throw new Error(`Unsupported type: ${type}`);
        }
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const githubToken = getInput('github-token');
        yield tokenWhoAmI(githubToken);
    });
}
run().catch((error) => setFailed(error));
