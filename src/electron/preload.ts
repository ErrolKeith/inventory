import { contextBridge } from "electron";

const mainWorldContextChannels = [
  {
    key: "versions",
    context: {
      node: process.versions.node,
      browser: process.versions.chrome,
      electron: process.versions.electron,
    },
  },
  {
    key: "user",
    context: {
      username: process.env["LOGNAME"] ?? process.env["USER"] ?? "Guest",
    },
  },
];

mainWorldContextChannels.forEach((channel) => {
  contextBridge.exposeInMainWorld(channel.key, channel.context);
});
