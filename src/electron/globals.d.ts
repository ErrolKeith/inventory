export interface User {
  username: string;
}

export interface Api {
  versions: {
    node: string;
    browser: string;
    electron: string;
  };
  user: User;
}

declare const backend: typeof import("./preload").mainExposedContext;
