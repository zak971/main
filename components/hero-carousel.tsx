"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function HeroCarousel() {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh]">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/TRY1.jpg"
          alt="Luxury car rental in Goa"
          fill
          priority
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={100}
          className="object-cover brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/65" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <motion.div 
          className="container relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 leading-tight text-left"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Your Ride in Goa,</span>
            <br className="hidden xs:block" />
            <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Ready When You Are</span>
          </motion.h1>

          

          {/* Subheading */}
          <motion.div 
            variants={fadeInUp}
            className="w-full overflow-hidden mb-3 sm:mb-5"
          >
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white leading-tight font-semibold tracking-wide drop-shadow-lg inline-flex items-center flex-wrap gap-2">
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Self-Drive Car Rentals</span>
              <span className="text-amber-300">•</span>
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">No Hidden Charges</span>
              <span className="text-amber-300">•</span>
              <span className="px-1 py-0.5 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-md">Doorstep Delivery</span>
            </p>
          </motion.div>

          {/* Benefits */}
          

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button 
              asChild
              size="lg" 
              className="group bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] shadow-xl active:scale-95 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 rounded-xl border-2 border-amber-300/30 text-xs xs:text-sm sm:text-base md:text-lg"
            >
              <Link href="/cars" className="flex items-center justify-center space-x-2 sm:space-x-3">
                <span className="hidden sm:inline">Book Now – Start Your Journey Today</span>
                <span className="sm:hidden">VIEW FLEET</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 