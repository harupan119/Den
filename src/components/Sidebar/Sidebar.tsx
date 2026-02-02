interface AppLink {
  id: string
  name: string
  icon: string
  type: 'app' | 'url' | 'command'
  path: string
}

const defaultApps: AppLink[] = [
  { id: 'obsidian', name: 'Obsidian', icon: '📝', type: 'app', path: 'obsidian://daily' },
  { id: 'gemini', name: 'Gemini', icon: '✨', type: 'url', path: 'https://gemini.google.com' },
  { id: 'claude', name: 'Claude', icon: '🤖', type: 'url', path: 'https://claude.ai' },
  { id: 'terminal', name: 'CLI', icon: '💻', type: 'command', path: 'wt.exe' },
  { id: 'gmail', name: 'Gmail', icon: '📧', type: 'url', path: 'https://mail.google.com' },
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
            <span className="app-icon">{app.icon}</span>
            <span className="app-name">{app.name}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
