"use client"

// Mobile navigation component with modern design
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="block md:hidden">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white backdrop-blur-md border-b border-neutral-800/50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Logo */}
              <Link 
                href="/" 
                className="flex items-center transition-all duration-300 hover:scale-105 hover:opacity-90"
              >
                <Image 
                  src="/images/logo.png" 
                  alt="Goa Car Rentals" 
                  width={100}
                  height={28}
                  className="h-7 w-auto" 
                  priority
                />
              </Link>

              {/* Centered Title */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-xl font-bold text-white tracking-wide">
                  Goa Car Rentals
                </span>
              </div>

              {/* Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 backdrop-blur-md pt-16">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-8 py-8">
              <Link
                href="/"
                className="text-white hover:text-orange-500 transition-all duration-300 text-lg font-semibold group relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/cars"
                className="text-white hover:text-orange-500 transition-all duration-300 text-lg font-semibold group relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Our Cars</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/blogs"
                className="text-white hover:text-orange-500 transition-all duration-300 text-lg font-semibold group relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Blogs</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#about"
                className="text-white hover:text-orange-500 transition-all duration-300 text-lg font-semibold group relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">About Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#contact"
                className="text-white hover:text-orange-500 transition-all duration-300 text-lg font-semibold group relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="mt-12 space-y-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Link href="tel:+919307055218">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Link href="https://wa.me/919307055218" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 