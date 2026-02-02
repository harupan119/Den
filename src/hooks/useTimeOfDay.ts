import { useState, useEffect } from 'react'

export type TimeOfDay = 'morning' | 'noon' | 'evening' | 'night'

function getTimeOfDay(hour: number): TimeOfDay {
  if (hour >= 5 && hour < 11) return 'morning'
  if (hour >= 11 && hour < 17) return 'noon'
  if (hour >= 17 && hour < 20) return 'evening'
  return 'night'
}

export function useTimeOfDay(): TimeOfDay {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(() => {
    return getTimeOfDay(new Date().getHours())
  })

  useEffect(() => {
    const checkTime = () => {
      const newTimeOfDay = getTimeOfDay(new Date().getHours())
      setTimeOfDay(newTimeOfDay)
    }

    // Check every minute
    const interval = setInterval(checkTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return timeOfDay
}

export function getBackgroundImage(timeOfDay: TimeOfDay): string {
  const backgrounds: Record<TimeOfDay, string> = {
    morning: '/background/back_morning.png',
    noon: '/background/back_noon.png',
    evening: '/background/back_evenig.png',
    night: '/background/back_night.png',
  }
  return backgrounds[timeOfDay]
}
