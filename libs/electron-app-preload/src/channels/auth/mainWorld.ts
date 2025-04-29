import { ipcRenderer } from "electron";

const authChannel = {
  key: "auth",
  exposed: {
    login: async (options: { email: string; password: string }) => {
      return await ipcRenderer.invoke("login", [JSON.stringify(options)]);
    },
  },
};

export default authChannel;
