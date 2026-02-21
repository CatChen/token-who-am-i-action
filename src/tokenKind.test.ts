import assert from 'node:assert/strict';
import test from 'node:test';
import { detectTokenKind } from './tokenKind.js';

void test('detectTokenKind identifies known GitHub token prefixes', () => {
  assert.equal(detectTokenKind('ghp_example'), 'pat-classic');
  assert.equal(detectTokenKind('github_pat_example'), 'pat-fine-grained');
  assert.equal(detectTokenKind('gho_example'), 'oauth-access-token');
  assert.equal(detectTokenKind('ghu_example'), 'github-app-user-access-token');
  assert.equal(
    detectTokenKind('ghs_example'),
    'github-app-installation-access-token',
  );
});

void test('detectTokenKind falls back to unknown for unrecognized tokens', () => {
  assert.equal(detectTokenKind('v1.123456'), 'unknown');
  assert.equal(detectTokenKind(''), 'unknown');
});
