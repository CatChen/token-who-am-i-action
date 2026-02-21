export type TokenKind = 'pat-classic' | 'pat-fine-grained' | 'oauth-access-token' | 'github-app-user-access-token' | 'github-app-installation-access-token' | 'unknown';
export declare function detectTokenKind(token: string): TokenKind;
