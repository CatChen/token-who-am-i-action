"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenWhoAmI = tokenWhoAmI;
const core_1 = require("@actions/core");
const getOctokit_1 = require("./getOctokit");
function tokenWhoAmI(githubToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const octokit = (0, getOctokit_1.getOctokit)(githubToken);
        const { viewer: { login, global_id: globalId }, } = yield octokit.graphql(`
      query {
        viewer {
          login
          global_id: id
        }
      }
    `, {});
        (0, core_1.notice)(`Login: ${login}`);
        (0, core_1.setOutput)('login', login);
        (0, core_1.notice)(`Global ID: ${globalId}`);
        (0, core_1.setOutput)('global-id', globalId);
        const { data: { id, name, email, type }, } = yield octokit.rest.users.getByUsername({ username: login });
        (0, core_1.notice)(`Id: ${id}`);
        (0, core_1.setOutput)('id', id);
        (0, core_1.notice)(`Name: ${name}`);
        (0, core_1.setOutput)('name', name);
        (0, core_1.notice)(`Email: ${email}`);
        (0, core_1.setOutput)('email', email);
        (0, core_1.notice)(`Type: ${type}`);
        (0, core_1.setOutput)('type', type);
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
            (0, core_1.notice)(`App Slug: ${appSlug}`);
            (0, core_1.setOutput)('app-slug', appSlug);
            const { data: { name: botName }, } = yield octokit.rest.apps.getBySlug({ app_slug: appSlug });
            (0, core_1.notice)(`Bot Name: ${botName}`);
            (0, core_1.setOutput)('name', botName);
            const botEmail = `${id}+${login}@users.noreply.github.com`;
            (0, core_1.notice)(`Bot Email: ${botEmail}`);
            (0, core_1.setOutput)('email', botEmail);
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
        const githubToken = (0, core_1.getInput)('github-token');
        yield tokenWhoAmI(githubToken);
    });
}
run().catch((error) => (0, core_1.setFailed)(error));
