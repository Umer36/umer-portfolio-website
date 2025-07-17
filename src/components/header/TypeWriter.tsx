import React, { useState, useEffect } from 'react'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  delay?: number
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay])

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypeWriter