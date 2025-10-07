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
              {navigationItems.map(({ id, label, icon: Icon, color }) => (
                <button 
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-${color}-500 hover:to-${color}-600 hover:text-white hover:shadow-md hover:scale-105`}
                >
                  <Icon className="w-4 h-4 group-hover:animate-pulse" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 shadow-lg">
            <nav className="p-4 space-y-2">
              {navigationItems.map(({ id, label, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full group flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all hover:bg-gradient-to-r hover:from-${color}-500/10 hover:to-${color}-600/10 hover:border-${color}-500/20 border border-transparent`}
                >
                  <Icon className="w-5 h-5 group-hover:animate-pulse" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
