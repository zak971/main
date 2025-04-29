import Link from "next/link"
import Image from "next/image"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Star, Car, Clock, Wallet, Shield, CheckCircle } from "lucide-react"

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
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-orange-400 text-xs sm:text-sm font-medium">Our Premium Fleet</span>
              <Car className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-orange-400" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Experience <span className="text-orange-400">Luxury</span> on Wheels
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              Choose from our wide range of well-maintained vehicles, from luxury sedans to spacious SUVs
            </p>
          </div>

          <FeaturedCars />
          
          <div className="flex justify-center mt-10 sm:mt-12">
            <Button 
              asChild 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="/cars" className="flex items-center">
                View All Cars 
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="About Goa Car Rentals"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Decorative Elements */}
              
            </div>

            {/* Content Section */}
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-orange-400 text-sm font-medium">About Us</span>
                <Star className="w-4 h-4 ml-2 text-orange-400" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Trusted Partner for <span className="text-orange-400">Premium</span> Car Rentals in Goa
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">&apos;At Goa Car Rentals, we understand that your journey in Goa should be as memorable as the destination itself. With years of experience in the car rental industry, we&apos;ve built our reputation on reliability, transparency, and exceptional service.&apos;</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Fleet</h3>
                    <p className="text-gray-300">Well-maintained vehicles ranging from economy to luxury, ensuring comfort and reliability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Trusted Service</h3>
                    <p className="text-gray-300">Transparent pricing, 24/7 support, and hassle-free booking process for your convenience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Local Expertise</h3>
                    <p className="text-gray-300">Deep knowledge of Goa&apos;s roads and destinations to enhance your travel experience.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/#contact" className="flex items-center">
                    <span className="relative z-10">Learn More</span>
                    <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg" 
                  className="relative overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-md hover:border-orange-500/50 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/#contact" className="flex items-center">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative px-4 mx-auto">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-orange-400 text-sm font-medium">Why Choose Us</span>
              <Star className="w-4 h-4 ml-2 text-orange-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Experience <span className="text-orange-400">Premium</span> Car Rental Service
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We provide exceptional service with a focus on quality, reliability, and customer satisfaction
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Premium Cars */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Premium Fleet</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Drive the latest models, meticulously maintained and sanitized for your comfort and safety. Our fleet includes luxury cars, SUVs, and economy options.
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Get instant assistance anytime via WhatsApp or call. Our local team is always ready to help with any queries or roadside support.
                </p>
              </div>
            </div>

            {/* Easy Booking */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Easy Booking</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Book instantly through WhatsApp. No complicated forms or waiting. Quick confirmation and doorstep delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="font-medium text-white mb-1">Flexible Hours</h4>
              <p className="text-sm text-gray-300">Daily or weekly rentals</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="font-medium text-white mb-1">Full Insurance</h4>
              <p className="text-sm text-gray-300">Comprehensive coverage</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="font-medium text-white mb-1">Free Delivery</h4>
              <p className="text-sm text-gray-300">Doorstep service</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="font-medium text-white mb-1">Best Rates</h4>
              <p className="text-sm text-gray-300">Transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16 text-center">
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-orange-400 bg-orange-400/10 rounded-full tracking-wide">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-4 sm:px-0">
              Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their experience with us.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <TestimonialSlider />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-center transform hover:scale-105 transition-transform duration-300 p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">4.9</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Average Rating</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Car Models</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 p-2 sm:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
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
              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white mb-1">Address</p>
                        <p className="text-gray-300">123 Beach Road, Calangute, North Goa, 403516</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white mb-1">Phone</p>
                        <Link
                          href="tel:+919307055218"
                          className="text-gray-300 hover:text-orange-400 transition-colors"
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
                        <p className="font-medium text-white mb-1">Email</p>
                        <Link
                          href="mailto:info@goacarrentals.com"
                          className="text-gray-300 hover:text-orange-400 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
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
