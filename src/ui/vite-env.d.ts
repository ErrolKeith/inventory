/// <reference types="vite/client" />

export interface AppVersions {
  node: string;
  browser: string;
  electron: string;
}

export interface User {
  username: string;
}

declare global {
  interface Window {
    versions: AppVersions;
    user: User;
  }
}
