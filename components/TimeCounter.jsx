"use client"

import { useState, useEffect } from "react"

const TimeCounter = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState("")

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime()

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeElapsed(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
      )
    }

    updateCounter()
    const intervalId = setInterval(updateCounter, 1000)

    return () => clearInterval(intervalId)
  }, [startDate])

  return (
    <span aria-live="polite" className="font-mono text-sm">
      {timeElapsed}
    </span>
  )
}

export default TimeCounter

