import { app, BrowserWindow } from "electron";
import { join } from "path";

let win: BrowserWindow;

function main() {
  const isDev = process.env.NODE_ENV === "DEV";
  const createWindow = () => {
    win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        preload: join(__dirname, "preload.js"),
      },
    });

    isDev
      ? win.loadURL("http://localhost:5173")
      : win.loadFile("./dist/ui/index.html");
  };

  app.whenReady().then(() => {
    createWindow();
  });
}

main();
