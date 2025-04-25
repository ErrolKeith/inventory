import { app, BrowserWindow } from "electron";
import { join } from "path";

let win: BrowserWindow;

function main() {
  const createWindow = () => {
    win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        preload: join(__dirname, "preload.js"),
      },
    });

    win.setTitle(`Inventory Manager`);
    win.loadFile("./dist/ui/index.html");
  };

  app.whenReady().then(() => {
    createWindow();
  });
}

main();
