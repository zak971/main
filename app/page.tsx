import Link from "next/link"
import Image from "next/image"
import { Phone, PhoneIcon as WhatsApp, Mail, ChevronRight, MapPin, Car, Clock, Shield, CheckCircle, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedCars } from "@/components/featured-cars"
import TestimonialSlider from "@/components/testimonial-slider"
import { ContactForm } from "@/components/contact-form"
import { HeroCarousel } from "@/components/hero-carousel"
import { FAQSchema } from "@/components/structured-data"

// FAQ data for structured data
const faqs = [
  {
    question: "What documents do I need to rent a car in Goa?",
    answer: "You need a valid driving license, ID proof (Aadhar/Passport), and address proof. For international tourists, an International Driving Permit is required along with passport."
  },
  {
    question: "Is there a security deposit for car rentals?",
    answer: "Yes, we require a refundable security deposit of ₹5,000 for standard cars and ₹10,000 for premium vehicles, returned upon safe return of the vehicle."
  },
  {
    question: "Do you offer airport pickup and drop service?",
    answer: "Yes, we offer complimentary airport pickup and drop service with advance booking of our rental cars."
  },
  {
    question: "What is included in the rental price?",
    answer: "Our rental price includes comprehensive insurance, unlimited kilometers, 24/7 roadside assistance, and standard maintenance."
  },
  {
    question: "Can I book a car without a credit card?",
    answer: "Yes, we accept cash payments and other payment methods like UPI, net banking, and debit cards."
  }
];

export default function Home() {
  return (
    <>
      {/* Add FAQSchema for structured data */}
      <FAQSchema faqs={faqs} />
    
      <div className="flex flex-col min-h-screen">
        {/* Main Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <HeroCarousel />

          {/* Featured Cars Section */}
          <section className="relative py-12 sm:py-16 overflow-hidden">
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-24 text-center px-4">
                <div className="inline-flex items-center justify-center px-5 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">Featured Cars</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                  Your <span className="text-gray-300 italic">Trusted Fleet</span>  for Every Journey
                </h2>

                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                  Discover Goa in comfort and style — premium vehicles, seamless service, and unforgettable road moments await you.
                </p>
              </div>

              {/* Featured Cars Grid */}
              <div className="max-w-7xl mx-auto">
                <FeaturedCars />
              </div>
              
              {/* CTA Button */}
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
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-24 text-center px-4">
                <div className="inline-flex items-center justify-center px-5 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">About Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                  Your <span className="text-gray-300 italic">Trusted Partner</span> for Every Journey
                </h2>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
                  Experience the charm of Goa with our luxurious fleet and exceptional service designed for every traveler.
                </p>
              </div>

              {/* Content */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Main Content */}
                  <div className="space-y-8">
                    <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-6">
                          Your Trusted Partner for <span className="text-gray-300">Premium</span> Car Rentals in Goa
                        </h3>
                        
                        <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                          At Goa Car Rentals, we understand that your journey in Goa should be as memorable as the destination itself.
                          With years of experience, we&apos;ve built our reputation on reliability, transparency, and exceptional service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                          <Button
                            asChild
                            size="lg"
                            className="group bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] shadow-md"
                          >
                            <Link href="/#contact" className="flex items-center space-x-2">
                              <span>Learn More</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </Button>

                          <Button
                            asChild
                            size="lg"
                            className="group bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] shadow-md"
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
                    <div className="group/item relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-lg hover:-translate-y-1 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Car className="w-6 h-6 text-neutral-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Premium Fleet</h4>
                        </div>
                        <p className="text-neutral-300">
                          Well-maintained vehicles ranging from economy to luxury, ensuring comfort and reliability.
                        </p>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="group/item relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-lg hover:-translate-y-1 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Shield className="w-6 h-6 text-neutral-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Trusted Service</h4>
                        </div>
                        <p className="text-neutral-300">
                          Transparent pricing, 24/7 support, and a hassle-free booking process for your convenience.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group/item relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-lg hover:-translate-y-1 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6 text-neutral-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Local Expertise</h4>
                        </div>
                        <p className="text-neutral-300">
                          Deep knowledge of Goa&apos;s roads and destinations to enhance your travel experience.
                        </p>
                      </div>
                    </div>
                    
                    {/* Card 4 */}
                    <div className="group/item relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-lg hover:-translate-y-1 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                            <Clock className="w-6 h-6 text-neutral-300" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Flexible Hours</h4>
                        </div>
                        <p className="text-neutral-300">
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
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-20 text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Experience <span className="text-gray-300 italic">Excellence</span>
                </h2>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Discover why we're the preferred choice for car rentals in Goa
                </p>
              </div>

              {/* Content */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Premium Cars */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Car className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Premium Fleet</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Drive the latest models, meticulously maintained and sanitized for your comfort and safety. Our fleet includes luxury cars, SUVs, and economy options.
                      </p>
                    </div>
                  </div>

                  {/* Easy Booking */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Easy Booking</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Book instantly through WhatsApp. No complicated forms or waiting. Quick confirmation and doorstep delivery.
                      </p>
                    </div>
                  </div>

                  {/* Free Delivery */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Free Delivery</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Enjoy the convenience of doorstep delivery and pickup service across Goa.
                      </p>
                    </div>
                  </div>

                  {/* 24/7 Support */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Shield className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">24/7 Support</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Round-the-clock assistance for any queries or emergencies during your rental period.
                      </p>
                    </div>
                  </div>

                  {/* Competitive Pricing */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Flexible Hours</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Choose from daily or weekly rentals with flexible pickup and drop-off times.
                      </p>
                    </div>
                  </div>

                  {/* Local Expertise */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-7 h-7 text-neutral-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Local Expertise</h3>
                      </div>
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        Deep knowledge of Goa's roads and destinations to enhance your travel experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative py-12 sm:py-16 overflow-hidden">
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-20 text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">Testimonials</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  What Our <span className="text-gray-300 italic">Clients</span> Say
                </h2>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Discover the experiences of our satisfied customers who have enjoyed our premium car rental services in Goa.
                </p>
              </div>

              <TestimonialSlider />

              {/* Stats Section */}
              <div className="max-w-6xl mx-auto mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</div>
                      <div className="text-lg text-neutral-300">Happy Customers</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">4.8</div>
                      <div className="text-lg text-neutral-300">Average Rating</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
                      <div className="text-lg text-neutral-300">Premium Cars</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">24/7</div>
                      <div className="text-lg text-neutral-300">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-12 sm:py-16 overflow-hidden">
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-20 text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">Contact Us</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Get In <span className="text-gray-300 italic">Touch</span>
                </h2>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Have questions? Contact us for more information about our premium car rental services
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Contact Info */}
                  <div className="space-y-8">
                    {/* Contact Information Card */}
                    <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                        <div className="space-y-8">
                          <div className="flex items-start group/item">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <MapPin className="w-7 h-7 text-neutral-300" />
                            </div>
                            <div className="ml-6">
                              <p className="text-lg font-semibold text-white mb-1">Address</p>
                              <p className="text-lg text-neutral-300">Fatorda, Margao, South Goa, 403602</p>
                            </div>
                          </div>

                          <div className="flex items-start group/item">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <Phone className="w-7 h-7 text-neutral-300" />
                            </div>
                            <div className="ml-6">
                              <p className="text-lg font-semibold text-white mb-1">Phone</p>
                              <Link
                                href="tel:+919307055218"
                                className="text-lg text-neutral-300 hover:text-white transition-colors"
                              >
                                +91 9307055218
                              </Link>
                            </div>
                          </div>

                          <div className="flex items-start group/item">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <Mail className="w-7 h-7 text-neutral-300" />
                            </div>
                            <div className="ml-6">
                              <p className="text-lg font-semibold text-white mb-1">Email</p>
                              <Link
                                href="mailto:info@goacarrentals.com"
                                className="text-lg text-neutral-300 hover:text-white transition-colors"
                              >
                                info@goacarrentals.com
                              </Link>
                            </div>
                          </div>

                          <div className="flex items-start group/item">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                              <WhatsApp className="w-7 h-7 text-neutral-300" />
                            </div>
                            <div className="ml-6">
                              <p className="text-lg font-semibold text-white mb-1">WhatsApp</p>
                              <Link
                                href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa"
                                className="text-lg text-neutral-300 hover:text-white transition-colors"
                              >
                                +91 9307055218
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours Card */}
                    
                  </div>

                  {/* Right Column - Contact Form */}
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center mb-20 text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <span className="text-sm font-medium text-white tracking-wide uppercase">Ready to Explore</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Experience <span className="text-gray-300 italic">Goa</span> in Style
                </h2>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Book your premium car rental today and embark on an unforgettable journey through Goa's beautiful landscapes.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                  <Button 
                    asChild
                    size="lg" 
                    className="group bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md px-8 py-6"
                  >
                    <Link href="tel:+919307055218" className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Call Now</span>
                    </Link>
                  </Button>

                  <Button 
                    asChild
                    size="lg" 
                    className="group bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] shadow-md px-8 py-6"
                  >
                    <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa" className="flex items-center space-x-3">
                      <WhatsApp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">WhatsApp Now</span>
                    </Link>
                  </Button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100+</div>
                      <div className="text-lg text-neutral-300">Happy Customers</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
                      <div className="text-lg text-neutral-300">Car Models</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">24/7</div>
                      <div className="text-lg text-neutral-300">Support</div>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-br from-black/50 via-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 transition-all duration-300 hover:border-neutral-600/50 hover:shadow-xl hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">4.9</div>
                      <div className="text-lg text-neutral-300">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
