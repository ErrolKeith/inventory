import { contextBridge } from "electron";
import seedMaterials from "./db/seedMaterials.json";

const mainWorldVersionChannel = {
  key: "versions",
  exposed: {
    node: process.versions.node,
    browser: process.versions.chrome,
    electron: process.versions.electron,
  },
};

const mainWorldMaterialsChannel = {
  key: "api",
  exposed: {
    searchMaterials: () => {
      return seedMaterials;
    },
  },
};

const mainWorldExposedChannels = [
  mainWorldVersionChannel,
  mainWorldMaterialsChannel,
];

mainWorldExposedChannels.forEach((channel) => {
  contextBridge.exposeInMainWorld(channel.key, channel.exposed);
});
