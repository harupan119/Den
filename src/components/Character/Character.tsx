import { useState, useEffect } from 'react'

const characterStyles = [
  '/character/デフォルト.png',
  '/character/styles/baseball.png',
  '/character/styles/cheerleader.png',
  '/character/styles/bee.png',
  '/character/styles/witch.png',
  '/character/styles/halloween.png',
  '/character/styles/sports.png',
  '/character/styles/dinosaur.png',
  '/character/styles/workout.png',
  '/character/styles/bunny.png',
  '/character/styles/autumn.png',
]

function Character() {
  const [styleIndex, setStyleIndex] = useState(0)

  useEffect(() => {
    // Change style every 10 minutes
    const interval = setInterval(() => {
      setStyleIndex((prev) => (prev + 1) % characterStyles.length)
    }, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    setStyleIndex((prev) => (prev + 1) % characterStyles.length)
  }

  return (
    <div className="character-container" onClick={handleClick}>
      <div className="character-placeholder">
        <img
          src={characterStyles[styleIndex]}
          alt="Character"
          className="character-image"
        />
      </div>
    </div>
  )
}

export default Character
