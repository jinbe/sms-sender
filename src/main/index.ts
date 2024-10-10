import { electronApp, is, optimizer } from "@electron-toolkit/utils";
import { app, BrowserWindow, ipcMain, shell } from "electron";
import { join, resolve } from "path";
import icon from "../../resources/icon.png?asset";

require("dotenv").config({
  path: app.isPackaged
    ? join(process.resourcesPath, ".env")
    : resolve(process.cwd(), ".env"),
});

const twilio_sid = process.env["TWILIO_SID"];
const twilio_token = process.env["TWILIO_TOKEN"];
const twilio_from = process.env["TWILIO_FROM"];

if (!twilio_sid || !twilio_token || !twilio_from) {
  throw new Error("TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM must be set");
}

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId("com.electron");

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  ipcMain.on("sendMessage", (e, args) => {
    const auth = Buffer.from(`${twilio_sid}:${twilio_token}`).toString(
      "base64",
    );

    const body = new URLSearchParams();
    body.append("From", twilio_from);
    body.append("To", args.phone);
    body.append("Body", args.message);

    fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${twilio_sid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      },
    )
      .then((rs) => {
        if (!rs.ok) {
          return rs.json().then((msg) => {
            throw new Error(`${msg.message}`);
          });
        }

        e.reply("sendMessageRs", { idx: args.idx, success: true });

        return rs.json();
      })
      .catch((err) => {
        e.reply("sendMessageRs", {
          idx: args.idx,
          success: false,
          message: err.message,
        });
      });
  });

  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
