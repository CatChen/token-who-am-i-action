/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: '\n  query ViewerIdentity {\n    viewer {\n      login\n      globalId: id\n    }\n  }\n'): typeof import('./graphql.js').ViewerIdentityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: '\n  query BotAppSlug($globalId: ID!) {\n    node(id: $globalId) {\n      ... on Bot {\n        appSlug: login\n      }\n    }\n  }\n'): typeof import('./graphql.js').BotAppSlugDocument;
