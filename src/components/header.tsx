'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { User, Briefcase, Award, Code, FolderOpen, GraduationCap, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const [showBrand, setShowBrand] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const navigationItems = [
    { id: 'overview', label: 'About', icon: User, color: 'blue' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'purple' },
    { id: 'tech-stack', label: 'Skills', icon: Code, color: 'green' },
    { id: 'experience', label: 'Experience', icon: Briefcase, color: 'orange' },
    { id: 'certificates', label: 'Certificates', icon: Award, color: 'pink' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, color: 'indigo' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Brand/Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className={`flex items-center space-x-2 transition-opacity duration-300 ${showBrand ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              PS
            </div>
            <span className="font-bold text-lg hidden sm:block">
              Prajjwal Singh
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block pb-4">
          <nav className="flex items-center justify-center">
            <div className="flex items-center space-x-1 bg-card border border-border rounded-lg p-1 shadow-md">
              <button 
                onClick={() => scrollToSection('overview')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500 hover:to-blue-600 hover:text-white hover:shadow-md hover:scale-105 text-blue-600 hover:text-white border border-blue-500/20 hover:border-blue-500/40"
              >
                <User className="w-4 h-4 group-hover:animate-pulse" />
                <span>About</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('education')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-purple-500/10 to-purple-600/10 hover:from-purple-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:scale-105 text-purple-600 hover:text-white border border-purple-500/20 hover:border-purple-500/40"
              >
                <GraduationCap className="w-4 h-4 group-hover:animate-pulse" />
                <span>Education</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('tech-stack')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-md hover:scale-105 text-green-600 hover:text-white border border-green-500/20 hover:border-green-500/40"
              >
                <Code className="w-4 h-4 group-hover:animate-pulse" />
                <span>Skills</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('experience')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-orange-500/10 to-orange-600/10 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-md hover:scale-105 text-orange-600 hover:text-white border border-orange-500/20 hover:border-orange-500/40"
              >
                <Briefcase className="w-4 h-4 group-hover:animate-pulse" />
                <span>Experience</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('certificates')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-pink-500/10 to-pink-600/10 hover:from-pink-500 hover:to-pink-600 hover:text-white hover:shadow-md hover:scale-105 text-pink-600 hover:text-white border border-pink-500/20 hover:border-pink-500/40"
              >
                <Award className="w-4 h-4 group-hover:animate-pulse" />
                <span>Certificates</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 hover:from-indigo-500 hover:to-indigo-600 hover:text-white hover:shadow-md hover:scale-105 text-indigo-600 hover:text-white border border-indigo-500/20 hover:border-indigo-500/40"
              >
                <FolderOpen className="w-4 h-4 group-hover:animate-pulse" />
                <span>Projects</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 shadow-lg">
            <nav className="p-4 space-y-2">
              <button
                onClick={() => scrollToSection('overview')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-blue-500/5 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/20 border border-blue-500/10 hover:border-blue-500/30 text-blue-600"
              >
                <User className="w-5 h-5 group-hover:animate-pulse text-blue-500" />
                <span>About</span>
              </button>
              
              <button
                onClick={() => scrollToSection('education')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-purple-500/5 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/20 border border-purple-500/10 hover:border-purple-500/30 text-purple-600"
              >
                <GraduationCap className="w-5 h-5 group-hover:animate-pulse text-purple-500" />
                <span>Education</span>
              </button>
              
              <button
                onClick={() => scrollToSection('tech-stack')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-green-500/5 to-green-600/5 hover:from-green-500/20 hover:to-green-600/20 border border-green-500/10 hover:border-green-500/30 text-green-600"
              >
                <Code className="w-5 h-5 group-hover:animate-pulse text-green-500" />
                <span>Skills</span>
              </button>
              
              <button
                onClick={() => scrollToSection('experience')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-orange-500/5 to-orange-600/5 hover:from-orange-500/20 hover:to-orange-600/20 border border-orange-500/10 hover:border-orange-500/30 text-orange-600"
              >
                <Briefcase className="w-5 h-5 group-hover:animate-pulse text-orange-500" />
                <span>Experience</span>
              </button>
              
              <button
                onClick={() => scrollToSection('certificates')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-pink-500/5 to-pink-600/5 hover:from-pink-500/20 hover:to-pink-600/20 border border-pink-500/10 hover:border-pink-500/30 text-pink-600"
              >
                <Award className="w-5 h-5 group-hover:animate-pulse text-pink-500" />
                <span>Certificates</span>
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all bg-gradient-to-r from-indigo-500/5 to-indigo-600/5 hover:from-indigo-500/20 hover:to-indigo-600/20 border border-indigo-500/10 hover:border-indigo-500/30 text-indigo-600"
              >
                <FolderOpen className="w-5 h-5 group-hover:animate-pulse text-indigo-500" />
                <span>Projects</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
