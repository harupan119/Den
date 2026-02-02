import { useState, useEffect } from 'react'

function SignBoard() {
  const [dateStr, setDateStr] = useState('')
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      const month = now.getMonth() + 1
      const day = now.getDate()
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const weekday = weekdays[now.getDay()]
      setDateStr(`${month}月${day}日\n${weekday}`)

      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTimeStr(`${hours}:${minutes}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="signboard-container">
      <img src="/items/board_W.png" alt="Sign Board" className="signboard-image" />
      <div className="signboard-content">
        <div className="signboard-date">{dateStr}</div>
        <div className="signboard-time">{timeStr}</div>
      </div>
    </div>
  )
}

export default SignBoard
