import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { spawn } from 'child_process'
import path from 'path'

let mainWindow: BrowserWindow | null = null

function createWindow() {
  // Background image size: 2752x1536, aspect ratio ~1.79:1
  const width = 1376
  const height = 768

  mainWindow = new BrowserWindow({
    width,
    height,
    minWidth: 860,
    minHeight: 480,
    frame: false,
    transparent: false,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL)
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// IPC handlers for app launcher
ipcMain.handle('open-url', async (_event, url: string) => {
  await shell.openExternal(url)
})

ipcMain.handle('open-app', async (_event, appPath: string) => {
  await shell.openExternal(appPath)
})

ipcMain.handle('run-command', async (_event, command: string) => {
  spawn(command, [], {
    shell: true,
    detached: true,
    stdio: 'ignore'
  }).unref()
})

// Window controls
ipcMain.handle('window-minimize', () => {
  mainWindow?.minimize()
})

ipcMain.handle('window-maximize', () => {
  if (mainWindow?.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow?.maximize()
  }
})

ipcMain.handle('window-close', () => {
  mainWindow?.close()
})
