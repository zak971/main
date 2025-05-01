import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 overflow-hidden">
      {/* Background Layers - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements - Optimized */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link href="/" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  Our Cars
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-gray-900">Our Services</h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li className="text-xs sm:text-sm text-gray-600">Premium Car Rentals</li>
              <li className="text-xs sm:text-sm text-gray-600">Airport Transfers</li>
              <li className="text-xs sm:text-sm text-gray-600">Long-term Rentals</li>
              <li className="text-xs sm:text-sm text-gray-600">Corporate Services</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li className="flex items-start">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600">Fatorda, Margao, South Goa, 403602</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-700 shrink-0 mt-0.5" />
                <Link href="tel:+919307055218" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  +91 9307055218
                </Link>
              </li>
              <li className="flex items-start">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-700 shrink-0 mt-0.5" />
                <Link href="mailto:info@goacarrentals.com" className="hover:text-gray-700 text-xs sm:text-sm text-gray-600 transition-colors duration-200">
                  info@goacarrentals.com
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 sm:mb-3 text-sm sm:text-base font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="#" className="hover:text-gray-700 text-gray-600 transition-colors duration-200">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-700 text-gray-600 transition-colors duration-200">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-700 text-gray-600 transition-colors duration-200">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-300">
          <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-3 md:flex-row md:space-y-0">
            <p className="text-xs sm:text-sm text-center md:text-left text-gray-600">&copy; {new Date().getFullYear()} Goa Car Rentals. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-center md:text-right text-gray-600">Designed with ❤️ for the beautiful beaches of Goa</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
