"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, PhoneIcon as WhatsApp, Star, Car, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/friend.jpg",
  },
  {
    image: "/images/raod.jpg",
  },
  {
    image: "/images/front.jpg",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps'
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  useEffect(() => {
    if (!emblaApi) return

    const handleSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    handleSelect()
    emblaApi.on("select", handleSelect)

    // Add autoplay
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 6000) // Change slide every 6 seconds

    // Cleanup
    return () => {
      clearInterval(autoplay)
      emblaApi.off("select", handleSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative w-full h-[100vh]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-[100vh]">
              {/* Background Image with Enhanced Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt="Goa Car Rentals"
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-orange-400 text-xs font-medium">Premium Car Rental Service</span>
            <Star className="w-3 h-3 ml-1.5 text-orange-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            Experience <span className="text-orange-400">Luxury</span> on Wheels
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-sm text-gray-300 mb-3 leading-relaxed">
            Discover the perfect blend of comfort and style with our premium fleet of vehicles in Goa 🌴
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4 w-full max-w-xs sm:max-w-none">
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            >
              <Link href="/cars">
                <Car className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                View Our Fleet
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            >
              <Link href="tel:+919307055218">
                <Phone className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                Call Now
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            >
              <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa">
                <WhatsApp className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                WhatsApp Now
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-4xl mx-auto w-full px-4">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-base sm:text-lg font-bold mb-1">100+</div>
              <div className="text-white/90 text-xs">Happy Customers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-base sm:text-lg font-bold mb-1">15+</div>
              <div className="text-white/90 text-xs">Car Models</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-base sm:text-lg font-bold mb-1">24/7</div>
              <div className="text-white/90 text-xs">Support</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-base sm:text-lg font-bold mb-1">4.9</div>
              <div className="text-white/90 text-xs">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border-none text-white shadow-lg backdrop-blur-md h-8 w-8 sm:h-10 sm:w-10"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border-none text-white shadow-lg backdrop-blur-md h-8 w-8 sm:h-10 sm:w-10"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-4 h-4 text-white rotate-90" />
      </div>
    </section>
  )
} 