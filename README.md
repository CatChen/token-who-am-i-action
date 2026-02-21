# token-who-am-i-action

[![Build](https://github.com/CatChen/token-who-am-i-action/actions/workflows/build.yml/badge.svg?branch=main&event=push)](https://github.com/CatChen/token-who-am-i-action/actions/workflows/build.yml)
[![Test](https://github.com/CatChen/token-who-am-i-action/actions/workflows/test.yml/badge.svg?branch=main&event=push)](https://github.com/CatChen/token-who-am-i-action/actions/workflows/test.yml)
[![ESLint](https://github.com/CatChen/token-who-am-i-action/actions/workflows/eslint.yml/badge.svg?branch=main&event=push)](https://github.com/CatChen/token-who-am-i-action/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/CatChen/token-who-am-i-action/actions/workflows/codeql.yml/badge.svg?branch=main&event=schedule)](https://github.com/CatChen/token-who-am-i-action/actions/workflows/codeql.yml)

As a GitHub Actions author, have you received GitHub token and tried to act on behave of the identity behind that token without knowing who that was? This GitHub Action helps you retrieve the identity information behind a GitHub token.

The information available from outputs:

1. `login`: It's commonly known as the username, e.g. my `login` is `CatChen`. When it's a bot (aka a GitHub App) `login` has a `[bot]` suffix, e.g. `github-actions[bot]`.
2. `global-id`: It's a unique id across all different GitHub object types. It's mainly used in GraphQL's `ID` type. It matches `node_id` field in some REST API.
3. `id`: A user or bot's id in the users table. A bot will have a different id from the bots table but it's rarely used.
4. `name`: A user or bot's display name. It's optional for users but not for bots.
5. `email`: A user's email if the user chose to make it visible to the public, or a bot's email constructed by GitHub's rules, e.g. `41898282+github-actions[bot]@users.noreply.github.com`.
6. `type`: Either `User` or `Bot`. Other less common types are not supported.
7. `app-slug`: The bot's username that's used in it's URL. It doesn't have the `[bot]` suffix. That's how it's different from `login`.
8. `scopes`: The user's permission scopes, e.g. `read:org, repo`. It's only available if the token is a classic PAT (Personal Access Token). It's not available for fine-grained PAT.
9. `token-kind`: Token type detected from token prefix. Possible values are `pat-classic` (`ghp_`), `pat-fine-grained` (`github_pat_`), `oauth-access-token` (`gho_`), `github-app-user-access-token` (`ghu_`), `github-app-installation-access-token` (`ghs_`), and `unknown` for legacy or unrecognized formats.
   `GITHUB_TOKEN` is a GitHub App installation token, so this output is typically `github-app-installation-access-token`.

## Usage as a Reusable Action

When writing a [composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action), use this action as a step to retrieve a token's identity information:

```yaml
runs:
  using: 'composite'
  steps:
    - uses: CatChen/token-who-am-i-action@v2
      id: token-who-am-i
      with:
        github-token: ${{ inputs.github-token }}

    - shell: bash
      env:
        LOGIN: ${{ steps.token-who-am-i.outputs.login }}
        GLOBAL_ID: ${{ steps.token-who-am-i.outputs.global-id }}
        ID: ${{ steps.token-who-am-i.outputs.id }}
        NAME: ${{ steps.token-who-am-i.outputs.name }}
        EMAIL: ${{ steps.token-who-am-i.outputs.email }}
        TYPE: ${{ steps.token-who-am-i.outputs.type }}
        APP_SLUG: ${{ steps.token-who-am-i.outputs.app-slug }}
        SCOPES: ${{ steps.token-who-am-i.outputs.scopes }}
        TOKEN_KIND: ${{ steps.token-who-am-i.outputs.token-kind }}
      run: |
        echo "Login is $LOGIN"
        echo "Global id is $GLOBAL_ID"
        echo "Id is $ID"
        echo "Name is $NAME"
        echo "Email is $EMAIL"
        echo "Type is $TYPE"
        echo "App slug is $APP_SLUG"
        echo "Scopes are $SCOPES"
        echo "Token kind is $TOKEN_KIND"
```

## Usage as a JavaScript Package

When creating a [JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action), install the `token-who-am-i-action` package and use it to get the same information.

```bash
npm i token-who-am-i-action
```

Use `npm` from above or `yarn` from below to install the `token-who-am-i-action` package.

```bash
yarn add token-who-am-i-action
```

Import `tokenWhoAmI` function from the package and call it to retrieve the token identity information:

```TypeScript
import { tokenWhoAmI } from 'token-who-am-i-action';

const me = await tokenWhoAmI({ githubToken });

const {
  login,
  globalId,
  type,
  tokenKind,
} = me;

if (me.type === 'User') {
  const {
    id,
    name,
    email,
    scopes,
  } = me;
} else if (me.type === 'Bot') {
  const {
    appSlug,
    id,
    name,
    email,
  } = me;
}
```
