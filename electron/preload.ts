import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  openUrl: (url: string) => ipcRenderer.invoke('open-url', url),
  openApp: (appPath: string) => ipcRenderer.invoke('open-app', appPath),
  runCommand: (command: string) => ipcRenderer.invoke('run-command', command),
  windowMinimize: () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: () => ipcRenderer.invoke('window-maximize'),
  windowClose: () => ipcRenderer.invoke('window-close'),
})
