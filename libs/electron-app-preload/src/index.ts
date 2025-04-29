import { contextBridge } from "electron";
import mainExposedChannels from "./channels";

export default function preload() {
  mainExposedChannels.forEach((channel) => {
    contextBridge.exposeInMainWorld(channel.key, channel.exposed);
  });
}
