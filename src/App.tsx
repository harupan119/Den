import Sidebar from './components/Sidebar/Sidebar'
import Character from './components/Character/Character'
import MessageBox from './components/MessageBox/MessageBox'
import SignBoard from './components/SignBoard/SignBoard'
import { useTimeOfDay, getBackgroundImage } from './hooks/useTimeOfDay'

function App() {
  const timeOfDay = useTimeOfDay()
  const backgroundImage = getBackgroundImage(timeOfDay)

  const handleMinimize = () => window.electronAPI.windowMinimize()
  const handleMaximize = () => window.electronAPI.windowMaximize()
  const handleClose = () => window.electronAPI.windowClose()

  const greetings: Record<string, string> = {
    morning: 'おはよう！今日も一日頑張ろうね！',
    noon: 'お昼だね！ちゃんとご飯食べた？',
    evening: 'お疲れ様！今日はどんな一日だった？',
    night: 'もう夜だね。あんまり夜更かししないでね！',
  }

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Title Bar */}
      <div className="title-bar">
        <div className="title-bar-drag">Den</div>
        <div className="window-controls">
          <button className="control-btn minimize" onClick={handleMinimize}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="2" y="5" width="8" height="2" fill="currentColor" />
            </svg>
          </button>
          <button className="control-btn maximize" onClick={handleMaximize}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="2" y="2" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button className="control-btn close" onClick={handleClose}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar - App Launcher */}
        <Sidebar />

        {/* Center Area - Character */}
        <div className="center-area">
          <MessageBox message={greetings[timeOfDay]} />
          <Character />
        </div>

        {/* Right Area */}
        <div className="right-area">
          <SignBoard />
        </div>
      </div>
    </div>
  )
}

export default App
