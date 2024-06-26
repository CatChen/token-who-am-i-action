type User = {
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
    type: 'User';
};
type Bot = {
    login: string;
    appSlug: string;
    globalId: string;
    id: number;
    name: string;
    email: string;
    type: 'Bot';
};
export declare function run(): Promise<User | Bot>;
export {};
