import type { Api, User } from "./globals";
import { contextBridge } from "electron";

class InMainExposedContextBuilder {
  private nodeVersion: string;
  private browserVersion: string;
  private electronVersion: string;
  private user?: User;

  constructor(envVersions: { node: string; chrome: string; electron: string }) {
    const { node, chrome, electron } = envVersions;
    this.nodeVersion = node;
    this.browserVersion = chrome;
    this.electronVersion = electron;
    return this;
  }

  public withUser(user: User) {
    this.user = user;
    return this;
  }

  getExposedContext(): Api {
    return {
      versions: {
        node: this.nodeVersion,
        browser: this.browserVersion,
        electron: this.electronVersion,
      },
      user: this.user ?? {
        username: "Guest",
      },
    };
  }
}

const mainExposedContext = new InMainExposedContextBuilder({
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
})
  .withUser({
    username: process.env["LOGNAME"] ?? process.env["USER"] ?? "Guest",
  })
  .getExposedContext();

contextBridge.exposeInMainWorld("api", mainExposedContext);

export { mainExposedContext };
