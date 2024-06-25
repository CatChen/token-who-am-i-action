import { error, getState, info, saveState } from '@actions/core';
import { context } from '@actions/github';

function run(): void {
  if (!getState('isPost')) {
    saveState('isPost', 'true');
  }
  info(`This is the Action context: ${JSON.stringify(context)}`);
  error('Action needs to be implemented.');
}

function cleanup(): void {
  error('Post action needs to be implemented or removed.');
}

if (!getState('isPost')) {
  run();
} else {
  cleanup();
}
