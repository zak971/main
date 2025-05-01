"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme } = useTheme()

  // Handle scroll effect for navbar
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Our Cars" },
    { href: "/#about", label: "About Us" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`${
        theme === 'dark' 
          ? 'bg-gray-900/95 text-white' 
          : 'bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 text-gray-900'
      } backdrop-blur-md shadow-md`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4">
            {/* Logo and Title Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 sm:space-x-3 transition-transform hover:scale-105"
            >
              <Image 
                src="/images/logo.png" 
                alt="Goa Car Rentals" 
                width={100}
                height={28}
                className="h-7 w-auto sm:h-8 md:h-10" 
                priority
              />
              <div className={`hidden sm:block text-base sm:text-lg md:text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Goa Car Rentals
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 sm:px-4 text-sm sm:text-base font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  } transition-all duration-200 hover:text-orange-500 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className={`group border-2 ${
                  theme === 'dark' 
                    ? 'border-gray-700 text-gray-200 hover:border-orange-500 hover:text-orange-500' 
                    : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                } transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 relative overflow-hidden`}
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-1 sm:space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium relative">
                    Call Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </Button>
              <Button 
                asChild 
                size="sm" 
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center space-x-1 sm:space-x-2">
                  <WhatsApp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium">WhatsApp</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`${
                    theme === 'dark' 
                      ? 'hover:bg-gray-800/50 text-white' 
                      : 'hover:bg-gray-100 text-gray-900'
                  } transition-colors duration-200 h-9 w-9`}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              {/* Mobile Menu Content */}
              <SheetContent side="right" className={`w-[280px] sm:w-[320px] ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200'
              } p-0`}>
                <div className="flex flex-col h-full">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <div className={`flex items-center justify-between p-3 sm:p-4 border-b ${
                    theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                      <Image 
                        src="/images/logo.png" 
                        alt="Goa Car Rentals" 
                        width={90}
                        height={25}
                        className="h-7 w-auto sm:h-8" 
                      />
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                      className={`h-9 w-9 ${
                        theme === 'dark' 
                          ? 'text-white hover:bg-gray-800/50' 
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                  
                  <nav className="flex-1 p-3 sm:p-4">
                    <ul className="space-y-3 sm:space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 text-sm sm:text-base font-medium ${
                              theme === 'dark' 
                                ? 'text-gray-200 hover:text-orange-500' 
                                : 'text-gray-700 hover:text-orange-500'
                            } transition-colors`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className={`p-3 sm:p-4 border-t ${
                    theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <Button 
                        asChild 
                        variant="outline" 
                        className={`w-full border-2 ${
                          theme === 'dark' 
                            ? 'border-gray-700 text-gray-200 hover:border-orange-500 hover:text-orange-500' 
                            : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                        } text-sm`}
                      >
                        <Link href="tel:+919307055218" className="flex items-center justify-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span className="font-medium">Call Us</span>
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-sm"
                      >
                        <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center justify-center space-x-2">
                          <WhatsApp className="w-4 h-4" />
                          <span className="font-medium">WhatsApp</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
