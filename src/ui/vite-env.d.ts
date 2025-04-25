/// <reference types="vite/client" />

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

declare global {
  interface Window {
    api: Api;
  }
}
