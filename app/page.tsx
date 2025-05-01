import Link from "next/link"
import Image from "next/image"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Car, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"

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
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers - Optimized */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements - Optimized */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header - Optimized */}
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Featured Cars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Your <span className="text-gray-600 italic">Trusted Fleet</span> for Every Journey
            </h2>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
              Discover Goa in comfort and style — premium vehicles, seamless service, and unforgettable road moments await you.
            </p>
          </div>

          {/* Featured Cars Grid - Optimized */}
          <div className="max-w-7xl mx-auto">
            <FeaturedCars />
          </div>
          
          {/* CTA Button - Optimized */}
          <div className="flex items-center justify-center mt-12 sm:mt-16">
            <Button 
              asChild 
              size="lg"
              className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md"
            >
              <Link href="/cars" className="flex items-center space-x-2">
                <span>View All Cars</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-sm font-medium text-gray-700">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Your Trusted <span className="text-gray-600 italic">Partner</span>
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Experience the best of Goa with our premium fleet and exceptional service
            </p>
          </div>
          
          {/* Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Your Trusted Partner for <span className="text-gray-800">Premium</span> Car Rentals in Goa
                    </h3>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      At Goa Car Rentals, we understand that your journey in Goa should be as memorable as the destination itself.
                      With years of experience, we&apos;ve built our reputation on reliability, transparency, and exceptional service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                      <Button
                        asChild
                        size="lg"
                        className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] shadow-md"
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

              {/* Right Column - Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="group/item relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                        <Car className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Premium Fleet</h4>
                    </div>
                    <p className="text-gray-700">
                      Well-maintained vehicles ranging from economy to luxury, ensuring comfort and reliability.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="group/item relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Trusted Service</h4>
                    </div>
                    <p className="text-gray-700">
                      Transparent pricing, 24/7 support, and a hassle-free booking process for your convenience.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group/item relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Local Expertise</h4>
                    </div>
                    <p className="text-gray-700">
                      Deep knowledge of Goa&apos;s roads and destinations to enhance your travel experience.
                    </p>
                  </div>
                </div>
                
                {/* Card 4 */}
                <div className="group/item relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-lg hover:-translate-y-1 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Flexible Hours</h4>
                    </div>
                    <p className="text-gray-700">
                      Choose from daily or weekly rentals with flexible pickup and drop-off times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Experience <span className="text-gray-600 italic">Excellence</span>
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Discover why we're the preferred choice for car rentals in Goa
            </p>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Premium Cars */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Premium Fleet</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Drive the latest models, meticulously maintained and sanitized for your comfort and safety. Our fleet includes luxury cars, SUVs, and economy options.
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Get instant assistance anytime via WhatsApp or call. Our local team is always ready to help with any queries or roadside support.
                </p>
              </div>
            </div>

            {/* Easy Booking */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Easy Booking</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Book instantly through WhatsApp. No complicated forms or waiting. Quick confirmation and doorstep delivery.
                </p>
              </div>
            </div>

              {/* Flexible Hours */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Flexible Hours</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Choose from daily or weekly rentals with flexible pickup and drop-off times to suit your schedule.
                  </p>
          </div>
              </div>

              {/* Full Insurance */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Full Insurance</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Comprehensive coverage for all our vehicles, giving you peace of mind during your journey.
                  </p>
            </div>
              </div>

              {/* Free Delivery */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-gray-700" />
            </div>
                    <h3 className="text-2xl font-bold text-gray-900">Free Delivery</h3>
              </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Enjoy the convenience of doorstep delivery and pickup service across Goa.
                  </p>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-sm font-medium text-gray-700">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              What Our <span className="text-gray-600 italic">Clients</span> Say
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Discover the experiences of our satisfied customers who have enjoyed our premium car rental services in Goa.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-6xl mx-auto">
            <TestimonialSlider />
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-lg text-gray-700">Happy Customers</div>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">4.8</div>
                  <div className="text-lg text-gray-700">Average Rating</div>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-lg text-gray-700">Premium Cars</div>
                </div>
            </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-lg text-gray-700">Customer Support</div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-sm font-medium text-gray-700">Contact Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Get In <span className="text-gray-600 italic">Touch</span>
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Have questions? Contact us for more information about our premium car rental services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                {/* Contact Information Card */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                    <div className="space-y-8">
                      <div className="flex items-start group/item">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-gray-700" />
                        </div>
                        <div className="ml-6">
                          <p className="text-lg font-semibold text-gray-900 mb-1">Address</p>
                          <p className="text-lg text-gray-700">123 Beach Road, Calangute, North Goa, 403516</p>
                      </div>
                    </div>

                      <div className="flex items-start group/item">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                          <Phone className="w-7 h-7 text-gray-700" />
                      </div>
                        <div className="ml-6">
                          <p className="text-lg font-semibold text-gray-900 mb-1">Phone</p>
                        <Link
                          href="tel:+919307055218"
                            className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          +91 9307055218
                        </Link>
                      </div>
                    </div>

                      <div className="flex items-start group/item">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                          <Mail className="w-7 h-7 text-gray-700" />
                      </div>
                        <div className="ml-6">
                          <p className="text-lg font-semibold text-gray-900 mb-1">Email</p>
                        <Link
                          href="mailto:info@goacarrentals.com"
                            className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          info@goacarrentals.com
                        </Link>
                      </div>
                    </div>

                      <div className="flex items-start group/item">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                          <WhatsApp className="w-7 h-7 text-gray-700" />
                      </div>
                        <div className="ml-6">
                          <p className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</p>
                        <Link
                          href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa"
                            className="text-lg text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          +91 9307055218
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Business Hours Card */}
                <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Hours</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center group/item">
                        <span className="text-lg text-gray-700">Monday - Friday:</span>
                        <span className="text-lg font-semibold text-gray-900">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center group/item">
                        <span className="text-lg text-gray-700">Saturday:</span>
                        <span className="text-lg font-semibold text-gray-900">9:00 AM - 7:00 PM</span>
                    </div>
                      <div className="flex justify-between items-center group/item">
                        <span className="text-lg text-gray-700">Sunday:</span>
                        <span className="text-lg font-semibold text-gray-900">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Right Column - Contact Form */}
              <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
                <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-sm font-medium text-gray-700">Ready to Explore</span>
        </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Experience <span className="text-gray-600 italic">Goa</span> in Style
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Book your premium car rental today and embark on an unforgettable journey through Goa's beautiful landscapes.
            </p>
          </div>
            
          {/* CTA Buttons */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button 
                asChild
                size="lg" 
                className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md px-8 py-6"
              >
                <Link href="tel:+919307055218" className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg">Call Now</span>
                </Link>
              </Button>

              <Button 
                asChild
                size="lg" 
                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md px-8 py-6"
              >
                <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center space-x-3">
                  <WhatsApp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg">WhatsApp Now</span>
                </Link>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-lg text-gray-700">Happy Customers</div>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-lg text-gray-700">Car Models</div>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-lg text-gray-700">Support</div>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-300 hover:border-gray-300/50 hover:shadow-xl hover:-translate-y-1 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">4.9</div>
                  <div className="text-lg text-gray-700">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
