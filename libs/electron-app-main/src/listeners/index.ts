import { ipcMain } from "electron";
import { login } from "./auth/login";

export function registerIpcMainListeners() {
  ipcMain.handle("login", login);
}
