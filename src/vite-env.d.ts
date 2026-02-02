/// <reference types="vite/client" />

interface ElectronAPI {
  openUrl: (url: string) => Promise<void>
  openApp: (appPath: string) => Promise<void>
  runCommand: (command: string) => Promise<void>
  windowMinimize: () => Promise<void>
  windowMaximize: () => Promise<void>
  windowClose: () => Promise<void>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
