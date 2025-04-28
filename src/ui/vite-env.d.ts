/// <reference types="vite/client" />
import type { Api, AppVersions } from "./types";

declare global {
  interface Window {
    versions: AppVersions;
    api: Api;
  }
}
