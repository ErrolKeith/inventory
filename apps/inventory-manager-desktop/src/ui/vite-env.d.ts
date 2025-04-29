/// <reference types="vite/client" />

import type { ApiChannel, AuthChannel, AppVersionsChannel } from "./types";

declare global {
  interface Window {
    api: ApiChannel["exposed"];
    auth: AuthChannel["exposed"];
    versions: AppVersionsChannel["exposed"];
  }
}
