"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
function run() {
    if (!(0, core_1.getState)('isPost')) {
        (0, core_1.saveState)('isPost', 'true');
    }
    (0, core_1.info)(`This is the Action context: ${JSON.stringify(github_1.context)}`);
    (0, core_1.error)('Action needs to be implemented.');
}
function cleanup() {
    (0, core_1.error)('Post action needs to be implemented or removed.');
}
if (!(0, core_1.getState)('isPost')) {
    run();
}
else {
    cleanup();
}
