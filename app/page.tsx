import Link from "next/link"
import Image from "next/image"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Star, Car, Clock, Wallet, Shield, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedCars } from "@/components/featured-cars"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { ContactForm } from "@/components/contact-form"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      {/* Featured Cars Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-3 sm:px-4 mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted <span className="text-gray-600">Fleet</span> for Every Journey
          </h2>
           <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
               Discover our modern, well-maintained vehicles ready to deliver a smooth and safe ride.
          </p>
        </div>

          <FeaturedCars />
          
          <div className="flex items-center justify-center mt-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] shadow-md"
            >
              <Link href="/cars" className="flex items-center space-x-2">
                <span>View All Cars</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Your Trusted Partner</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/about.jpg"
                  alt="About Goa Car Rentals"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm md:text-base font-medium">Experience the best of Goa with our premium fleet</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Your Trusted Partner for <span className="text-gray-800">Premium</span> Car Rentals in Goa
              </h3>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Goa Car Rentals, we understand that your journey in Goa should be as memorable as the destination itself.
                With years of experience, we've built our reputation on reliability, transparency, and exceptional service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Car className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Premium Fleet</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Well-maintained vehicles ranging from economy to luxury, ensuring comfort and reliability.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Trusted Service</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Transparent pricing, 24/7 support, and a hassle-free booking process for your convenience.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Local Expertise</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Deep knowledge of Goa's roads and destinations to enhance your travel experience.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Flexible Hours</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Choose from daily or weekly rentals with flexible pickup and drop-off times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
                >
                  <Link href="/#contact" className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:bg-gray-200/50 shadow-sm"
                >
                  <Link href="/#contact" className="flex items-center space-x-2">
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Experience Premium Service</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Premium Cars */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Premium Fleet</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Drive the latest models, meticulously maintained and sanitized for your comfort and safety. Our fleet includes luxury cars, SUVs, and economy options.
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Get instant assistance anytime via WhatsApp or call. Our local team is always ready to help with any queries or roadside support.
                </p>
              </div>
            </div>

            {/* Easy Booking */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Easy Booking</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Book instantly through WhatsApp. No complicated forms or waiting. Quick confirmation and doorstep delivery.
                </p>
              </div>
            </div>

            {/* Flexible Hours */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Flexible Hours</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Choose from daily or weekly rentals with flexible pickup and drop-off times to suit your schedule.
                </p>
              </div>
            </div>

            {/* Full Insurance */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Full Insurance</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Comprehensive coverage for all our vehicles, giving you peace of mind during your journey.
                </p>
              </div>
            </div>

            {/* Free Delivery */}
            <div className="group relative bg-white/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Free Delivery</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enjoy the convenience of doorstep delivery and pickup service across Goa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative z-10 px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">What Our Clients Say</h2>
            <p className="text-gray-600 text-sm sm:text-base">Discover the experiences of our satisfied customers who have enjoyed our premium car rental services in Goa.</p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-5xl mx-auto">
            <TestimonialSlider />
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-12 md:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">4.8</div>
                <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Premium Cars</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-orange-400 text-sm font-medium">Contact Us</span>
              <Mail className="w-4 h-4 ml-2 text-orange-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In <span className="text-orange-400">Touch</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
              Have questions? Contact us for more information about our premium car rental services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-orange-100/50 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Address</p>
                        <p className="text-gray-700">123 Beach Road, Calangute, North Goa, 403516</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Phone</p>
                        <Link
                          href="tel:+919307055218"
                          className="text-gray-700 hover:text-orange-500 transition-colors"
                        >
                          +91 9307055218
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Email</p>
                        <Link
                          href="mailto:info@goacarrentals.com"
                          className="text-gray-700 hover:text-orange-400 transition-colors"
                        >
                          info@goacarrentals.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <WhatsApp className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white mb-1">WhatsApp</p>
                        <Link
                          href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa"
                          className="text-gray-300 hover:text-orange-400 transition-colors"
                        >
                          +91 9307055218
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monday - Friday:</span>
                      <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Saturday:</span>
                      <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sunday:</span>
                      <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with Pattern and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Explore <span className="text-orange-400">Goa</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the freedom of exploring Goa at your own pace. Book now and get the best rates with our premium car rental service.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <Link href="tel:+919307055218">Call Now</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <WhatsApp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa">
                  WhatsApp Now
                </Link>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 text-2xl font-bold mb-1">500+</div>
                <div className="text-white/90 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 text-2xl font-bold mb-1">15+</div>
                <div className="text-white/90 text-sm">Car Models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 text-2xl font-bold mb-1">24/7</div>
                <div className="text-white/90 text-sm">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 text-2xl font-bold mb-1">4.9</div>
                <div className="text-white/90 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
