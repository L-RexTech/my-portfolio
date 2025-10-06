'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button 
        disabled
        className="relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all h-10 w-10 border-2 border-border bg-background opacity-50"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="group relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all hover:scale-110 h-10 w-10 border-2 border-border bg-background hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-200 dark:hidden"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-200 hidden dark:block"></div>
      <Sun className="relative h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-600 group-hover:text-orange-500" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400 group-hover:text-purple-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
