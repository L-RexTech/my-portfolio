'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.8,
      })
    }

    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.classList.contains('dark')
      const particleColor = isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(20, 20, 20, 0.9)'
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(20, 20, 20, 0.5)'

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 180) {
          const force = (180 - distance) / 180
          particle.vx += (dx / distance) * force * 0.05
          particle.vy += (dy / distance) * force * 0.05
        }

        particle.vx *= 0.96
        particle.vy *= 0.96

        const maxSpeed = 3
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed
          particle.vy = (particle.vy / speed) * maxSpeed
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.shadowBlur = 8
        ctx.shadowColor = particleColor
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 2
            ctx.globalAlpha = 0.7 * (1 - dist / 180)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
