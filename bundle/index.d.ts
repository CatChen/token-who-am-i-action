import { type TokenKind } from './tokenKind.js';
export type BaseActor = {
    tokenKind: TokenKind;
};
export type User = BaseActor & {
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
    scopes?: Array<string>;
    type: 'User';
};
export type Bot = BaseActor & {
    login: string;
    appSlug: string;
    globalId: string;
    id: number;
    name: string;
    email: string;
    type: 'Bot';
};
export type Actor = User | Bot;
export declare function tokenWhoAmI({ githubToken, }: {
    githubToken: string;
}): Promise<Actor>;
