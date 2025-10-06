'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { User, Briefcase, Award, Code, FolderOpen, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const [showBrand, setShowBrand] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroTitle = document.querySelector('h1')
      if (heroTitle) {
        const rect = heroTitle.getBoundingClientRect()
        // Show brand when hero title scrolls out of view (top of title is above viewport)
        setShowBrand(rect.bottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 120 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Brand/Logo */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className={`flex items-center space-x-2 transition-opacity duration-300 ${showBrand ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              PS
            </div>
            <span className="font-bold text-lg">
              Prajjwal Singh
            </span>
          </Link>
          
          <ThemeToggle />
        </div>

        {/* Center Navigation */}
        <div className="pb-4">
          <nav className="flex items-center justify-center">
            <div className="flex items-center space-x-1 bg-card border border-border rounded-lg p-1 shadow-md">
              <button 
                onClick={() => scrollToSection('overview')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <User className="w-4 h-4 group-hover:animate-pulse" />
                <span>About</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('education')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <GraduationCap className="w-4 h-4 group-hover:animate-pulse" />
                <span>Education</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('tech-stack')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <Code className="w-4 h-4 group-hover:animate-pulse" />
                <span>Skills</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('experience')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <Briefcase className="w-4 h-4 group-hover:animate-pulse" />
                <span>Experience</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('certificates')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <Award className="w-4 h-4 group-hover:animate-pulse" />
                <span>Certificates</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 hover:text-white hover:shadow-md hover:scale-105"
              >
                <FolderOpen className="w-4 h-4 group-hover:animate-pulse" />
                <span>Projects</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
