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
        <section className="relative py-8 sm:py-12 overflow-hidden">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16 text-center px-4">
              <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-sm font-medium text-white tracking-wide uppercase">Featured Cars</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight">
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
            <div className="flex items-center justify-center mt-8 sm:mt-12">
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
          <section id="about" className="relative py-12 sm:py-16 overflow-hidden -mt-12 sm:-mt-16">
            <div className="container relative px-4 sm:px-6 mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex items-center justify-center px-5 py-2 mb-6 bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                  <span className="text-sm font-semibold text-gray-300 tracking-widest uppercase">About Us</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight max-w-4xl">
                  The <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Epitome</span> of Luxury Travel
                </h2>
                
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent my-6"></div>
                
                <p className="text-gray-400 max-w-xl mt-4 text-sm sm:text-base">
                  Elevating your Goa experience with unparalleled premium service
                </p>
              </div>

              {/* Content */}
              <div className="relative max-w-4xl mx-auto">
                <div className="space-y-10 text-gray-300 text-center">
                  {/* Elegant decorative element */}
                  <div className="absolute -left-24 top-1/3 w-16 h-16 blur-xl bg-white/5 rounded-full hidden lg:block"></div>
                  <div className="absolute -right-24 top-2/3 w-12 h-12 blur-lg bg-white/5 rounded-full hidden lg:block"></div>
                  
                  <p className="text-xl sm:text-2xl leading-relaxed font-light">
                    At <span className="font-semibold text-white">Goa Car Rentals</span>, we don't just offer vehicles — we curate <span className="italic text-gray-200">exceptional journeys</span> tailored for discerning travelers.
                  </p>
                  
                  <div className="max-w-3xl mx-auto bg-gradient-to-br from-black/30 via-neutral-900/30 to-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-full md:w-1/2 space-y-4 text-center">
                        <h3 className="text-xl font-semibold text-white">Our Philosophy</h3>
                        <p className="text-gray-300 leading-relaxed">
                          We believe luxury is found in the details — immaculately maintained vehicles, personalized service, and the freedom to explore Goa's treasures at your own pace.
                        </p>
                      </div>
                      
                      <div className="w-full md:w-1/2 space-y-4 text-center">
                        <h3 className="text-xl font-semibold text-white">Our Promise</h3>
                        <p className="text-gray-300 leading-relaxed">
                          With <span className="text-white">24/7 concierge service</span> and <span className="text-white">exclusive fleet options</span>, we transform ordinary travel into extraordinary memories.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-8 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="relative group/btn overflow-hidden bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-[0.98] border border-white/10 backdrop-blur-sm px-8 py-5 rounded-xl"
                    >
                      <Link href="/#contact" className="flex items-center justify-center space-x-3">
                        <Phone className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-500" />
                        <span className="text-base tracking-wide">Contact Now</span>
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-neutral-400/40 to-white/40 group-hover/btn:w-full transition-all duration-700 ease-in-out"></div>
                      </Link>
                    </Button>

                    <div className="flex items-center text-gray-400 text-sm space-x-3 pt-4">
                      <span className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></span>
                      <span className="text-sm font-light italic">Discover the Difference</span>
                      <span className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Why Choose Us Section */}
        <section className="relative py-12 sm:py-16 overflow-hidden -mt-12 sm:-mt-16">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="inline-flex items-center justify-center px-5 py-2 mb-6 bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                <span className="text-sm font-semibold text-gray-300 tracking-widest uppercase">Why Choose Us</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight max-w-4xl">
                Experience <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Excellence</span>
              </h2>
            </div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto">
              <div className="space-y-10 text-gray-300 text-center">
                <p className="text-xl sm:text-2xl leading-relaxed font-light">
                  Discover why we're the <span className="font-semibold text-white">preferred choice</span> for car rentals in Goa, offering <span className="italic text-gray-200">unmatched service</span> and premium vehicles.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-4">
                  {/* Premium Fleet Feature */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black mb-4 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <Car className="w-8 h-8 text-white" />
                        <div className="absolute -inset-1 rounded-full bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">Premium Fleet</h3>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Latest luxury models</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Immaculately maintained vehicles</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Variety of premium options</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Easy Booking Feature */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black mb-4 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <WhatsApp className="w-8 h-8 text-white" />
                        <div className="absolute -inset-1 rounded-full bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">Easy Booking</h3>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Instant WhatsApp booking</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">No complicated forms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Quick confirmation & delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Free Delivery Feature */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black mb-4 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <MapPin className="w-8 h-8 text-white" />
                        <div className="absolute -inset-1 rounded-full bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">Free Delivery</h3>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Doorstep delivery anywhere in Goa</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Convenient pickup service</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">No extra charges for delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 24/7 Support Feature */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black mb-4 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <Shield className="w-8 h-8 text-white" />
                        <div className="absolute -inset-1 rounded-full bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">24/7 Support</h3>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Round-the-clock assistance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Roadside emergency support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">Prompt response to all queries</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Stats Section - Redesigned */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto pt-12">
                  {/* Happy Customers Stat */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">100+</div>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent mb-2"></div>
                      <h3 className="text-white text-sm font-medium tracking-wide">Happy Customers</h3>
                    </div>
                  </div>

                  {/* Average Rating Stat */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">4.8</div>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent mb-2"></div>
                      <h3 className="text-white text-sm font-medium tracking-wide">Average Rating</h3>
                    </div>
                  </div>

                  {/* Premium Cars Stat */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">50+</div>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent mb-2"></div>
                      <h3 className="text-white text-sm font-medium tracking-wide">Premium Cars</h3>
                    </div>
                  </div>

                  {/* Customer Support Stat */}
                  <div className="group relative bg-gradient-to-br from-black/40 via-neutral-900/40 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">24/7</div>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent mb-2"></div>
                      <h3 className="text-white text-sm font-medium tracking-wide">Customer Support</h3>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-8 pt-12">
                  <Button
                    asChild
                    size="lg"
                    className="relative group/btn overflow-hidden bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 text-white font-medium transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-[0.98] border border-white/10 backdrop-blur-sm px-8 py-5 rounded-xl"
                  >
                    <Link href="/#contact" className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-500" />
                      <span className="text-base tracking-wide">Contact Now</span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-neutral-400/40 to-white/40 group-hover/btn:w-full transition-all duration-700 ease-in-out"></div>
                    </Link>
                  </Button>

                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-10 sm:py-14 overflow-hidden -mt-12 sm:-mt-16">  
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-14 text-center">
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-10 sm:py-14 overflow-hidden -mt-12 sm:-mt-16">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-14 text-center">
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
        <section className="relative py-14 overflow-hidden -mt-12 sm:-mt-16">
          <div className="container relative px-4 sm:px-6 mx-auto">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12 text-center">
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
