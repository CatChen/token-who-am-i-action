export type TokenKind =
  | 'pat-classic'
  | 'pat-fine-grained'
  | 'oauth-access-token'
  | 'github-app-user-access-token'
  | 'github-app-installation-access-token'
  | 'unknown';

export function detectTokenKind(token: string): TokenKind {
  if (token.startsWith('ghp_')) {
    return 'pat-classic';
  }

  if (token.startsWith('github_pat_')) {
    return 'pat-fine-grained';
  }

  if (token.startsWith('gho_')) {
    return 'oauth-access-token';
  }

  if (token.startsWith('ghu_')) {
    return 'github-app-user-access-token';
  }

  if (token.startsWith('ghs_')) {
    return 'github-app-installation-access-token';
  }

  return 'unknown';
}
