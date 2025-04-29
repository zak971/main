import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-3 sm:px-4 py-6 sm:py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <Image
                src="/images/logo.png"
                alt="Goa Car Rentals"
                width={120}
                height={32}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Premium car rental service in Goa offering well-maintained vehicles at affordable prices. Experience the
              beauty of Goa with comfort and style.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <Link href="#" className="hover:text-white">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/" className="hover:text-white text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-white text-xs sm:text-sm">
                  Our Cars
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white">Our Cars</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/cars?type=economy" className="hover:text-white text-xs sm:text-sm">
                  Economy Cars
                </Link>
              </li>
              <li>
                <Link href="/cars?type=sedan" className="hover:text-white text-xs sm:text-sm">
                  Sedans
                </Link>
              </li>
              <li>
                <Link href="/cars?type=suv" className="hover:text-white text-xs sm:text-sm">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="/cars?type=luxury" className="hover:text-white text-xs sm:text-sm">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link href="/cars?type=minivan" className="hover:text-white text-xs sm:text-sm">
                  Minivans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white">Contact Us</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Fatorda, Margao, South Goa, 403602</span>
              </li>
              <li className="flex">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <Link href="tel:+919307055218" className="hover:text-white text-xs sm:text-sm">
                  +91 9307055218
                </Link>
              </li>
              <li className="flex">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <Link href="mailto:info@goacarrentals.com" className="hover:text-white text-xs sm:text-sm">
                  info@goacarrentals.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-3 md:flex-row md:space-y-0">
            <p className="text-xs sm:text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Goa Car Rentals. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-center md:text-right">Designed with ❤️ for the beautiful beaches of Goa</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
