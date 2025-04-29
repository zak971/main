import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Goa Car Rentals"
                width={130}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mb-4 text-sm">
              Premium car rental service in Goa offering well-maintained vehicles at affordable prices. Experience the
              beauty of Goa with comfort and style.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="hover:text-white">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-white text-sm">
                  Our Cars
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Our Cars</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars?type=economy" className="hover:text-white text-sm">
                  Economy Cars
                </Link>
              </li>
              <li>
                <Link href="/cars?type=sedan" className="hover:text-white text-sm">
                  Sedans
                </Link>
              </li>
              <li>
                <Link href="/cars?type=suv" className="hover:text-white text-sm">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="/cars?type=luxury" className="hover:text-white text-sm">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link href="/cars?type=minivan" className="hover:text-white text-sm">
                  Minivans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex">
                <MapPin className="w-4 h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm">Fatorda, Margao, South Goa, 403602</span>
              </li>
              <li className="flex">
                <Phone className="w-4 h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <Link href="tel:+919307055218" className="hover:text-white text-sm">
                  +91 9307055218
                </Link>
              </li>
              <li className="flex">
                <Mail className="w-4 h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                <Link href="mailto:info@goacarrentals.com" className="hover:text-white text-sm">
                  info@goacarrentals.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Goa Car Rentals. All rights reserved.</p>
            <p className="text-sm">Designed with ❤️ for the beautiful beaches of Goa</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
