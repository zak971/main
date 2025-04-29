"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, PhoneIcon as WhatsApp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Our Cars" },
    { href: "/#about", label: "About Us" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo and Title Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 transition-transform hover:scale-105"
          >
            <Image 
              src="/images/logo.png" 
              alt="Goa Car Rentals" 
              width={120}
              height={32}
              className="h-8 w-auto sm:h-10" 
              priority
            />
            <div className="hidden sm:block text-lg sm:text-xl font-semibold text-gray-900">
              Goa Car Rentals
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 text-base font-medium text-gray-700 transition-all duration-200 hover:text-orange-500 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="border-2 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
            >
              <Link href="tel:+919307055218" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center space-x-2">
                <WhatsApp className="w-4 h-4" />
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
                className="hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white p-0">
              <div className="flex flex-col h-full">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                    <Image 
                      src="/images/logo.png" 
                      alt="Goa Car Rentals" 
                      width={100}
                      height={28}
                      className="h-8 w-auto" 
                    />
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <nav className="flex-1 p-4">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="p-4 border-t">
                  <div className="flex flex-col space-y-3">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-2 hover:border-orange-500 hover:text-orange-500"
                    >
                      <Link href="tel:+919307055218" className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">Call Us</span>
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
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
    </header>
  )
}
