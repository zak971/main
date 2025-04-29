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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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
    <section className="relative w-full h-[90vh]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-[90vh]">
              {/* Background Image with Enhanced Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt="Goa Car Rentals"
                  fill
                  priority={index === 0}
                  className="object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
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
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-orange-400 text-sm font-medium">Premium Car Rental Service</span>
            <Star className="w-4 h-4 ml-2 text-orange-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experience <span className="text-orange-400">Luxury</span> on Wheels
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Discover the perfect blend of comfort and style with our premium fleet of vehicles in Goa 🌴
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="/cars">
                <Car className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Our Fleet
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="tel:+919307055218">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Call Now
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href="https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20a%20car%20in%20Goa">
                <WhatsApp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp Now
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-2xl font-bold mb-1">100+</div>
              <div className="text-white/90 text-sm">Happy Customers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-2xl font-bold mb-1">15+</div>
              <div className="text-white/90 text-sm">Car Models</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-2xl font-bold mb-1">24/7</div>
              <div className="text-white/90 text-sm">Support</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 border border-white/10">
              <div className="text-orange-400 text-2xl font-bold mb-1">4.9</div>
              <div className="text-white/90 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border-none text-white shadow-lg backdrop-blur-md"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 border-none text-white shadow-lg backdrop-blur-md"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-white rotate-90" />
      </div>
    </section>
  )
} 