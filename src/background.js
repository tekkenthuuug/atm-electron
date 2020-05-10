"use strict";

import { app, protocol, BrowserWindow, ipcMain, ipcRenderer } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

let win;
let cardChooserWin;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  win = new BrowserWindow({
    width: 920,
    maxWidth: 920,
    minWidth: 920,
    maxHeight: 690,
    minHeight: 690,
    height: 690,
    frame: false,
    maximizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    app.quit();
    win = null;
  });
}

function createCardChooserWindow() {
  // If window already opened - focus on it and terminate function
  if (cardChooserWin) {
    cardChooserWin.focus();
    return;
  }

  cardChooserWin = new BrowserWindow({
    width: 400,
    height: 760,
    frame: false,
    maximizable: false,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  cardChooserWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "/#/cardchooser");

  // Garabge collection
  cardChooserWin.on("close", () => {
    cardChooserWin = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

ipcMain.on("open-card-chooser", () => {
  createCardChooserWindow();
});

ipcMain.on("card-was-choosen", (item, cardNo, cardHolder) => {
  cardChooserWin.close();
  win.webContents.send("set-card", cardNo, cardHolder);
});
