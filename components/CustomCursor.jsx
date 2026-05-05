'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Dot follows instantly
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 800 })
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 800 })

  // Ring lags behind for a trailing effect
  const ringX = useSpring(cursorX, { damping: 22, stiffness: 180 })
  const ringY = useSpring(cursorY, { damping: 22, stiffness: 180 })

  useEffect(() => {
    const onMove = e => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const onOver = e => {
      setIsHovering(!!e.target.closest('a, button, [role="button"], input, textarea'))
    }

    const onLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering
            ? 'rgba(167, 139, 250, 0.7)'
            : 'rgba(99, 102, 241, 0.45)',
        }}
        transition={{ duration: 0.18 }}
      />

      {/* Sharp center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
          backgroundColor: isHovering ? '#a78bfa' : '#818cf8',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
