"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Car, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="block md:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
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
              <span className="text-xl font-bold text-gray-900 tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Goa Car Rentals
              </span>
            </div>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-900 hover:bg-gray-100/50 rounded-full transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-16">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 py-6">
              <Link
                href="/"
                className="text-gray-900 hover:text-orange-500 transition-all duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/cars"
                className="text-gray-900 hover:text-orange-500 transition-all duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Cars
              </Link>
              <Link
                href="/#about"
                className="text-gray-900 hover:text-orange-500 transition-all duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="text-gray-900 hover:text-orange-500 transition-all duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-8 space-y-3">
              <Button
                asChild
                className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="tel:+919307055218">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600 text-white h-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
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