interface AppLink {
  id: string
  name: string
  icon: string
  type: 'app' | 'url' | 'command'
  path: string
  useImage?: boolean
}

const defaultApps: AppLink[] = [
  { id: 'obsidian', name: 'Obsidian', icon: '/icons/obsidian.svg', type: 'app', path: 'obsidian://daily', useImage: true },
  { id: 'gemini', name: 'Gemini', icon: '/icons/gemini.svg', type: 'url', path: 'https://gemini.google.com', useImage: true },
  { id: 'claude', name: 'Claude', icon: '/icons/claude.svg', type: 'url', path: 'https://claude.ai', useImage: true },
  { id: 'terminal', name: 'CLI', icon: '💻', type: 'command', path: 'wt.exe' },
  { id: 'sirius', name: 'Sirius', icon: '🎓', type: 'url', path: 'https://web.sirius.tuat.ac.jp/campusweb/' },
]

function Sidebar() {
  const handleClick = async (app: AppLink) => {
    try {
      switch (app.type) {
        case 'url':
          await window.electronAPI.openUrl(app.path)
          break
        case 'app':
          await window.electronAPI.openApp(app.path)
          break
        case 'command':
          await window.electronAPI.runCommand(app.path)
          break
      }
    } catch (error) {
      console.error(`Failed to open ${app.name}:`, error)
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {defaultApps.map((app) => (
          <button
            key={app.id}
            className="app-button"
            onClick={() => handleClick(app)}
            title={app.name}
          >
            {app.useImage ? (
              <img src={app.icon} alt={app.name} className="app-icon-img" />
            ) : (
              <span className="app-icon">{app.icon}</span>
            )}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
