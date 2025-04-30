"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/hero1.jpg",
  },
  {
    image: "/images/hero2.jpg",
  },
  {
    image: "/images/hero3.jpg",
  },
  {
    image: "/images/hero4.jpg",
  },
  {
    image: "/images/hero5.jpg",
  },
  {
    image: "/images/hero6.jpg",
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
    let autoplay: NodeJS.Timeout
    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
      }, 4000) // Change slide every 6 seconds
    }

    // Start autoplay
    startAutoplay()

    // Pause on hover and pointer down
    const pauseAutoplay = () => {
      clearInterval(autoplay)
    }

    const resumeAutoplay = () => {
      startAutoplay()
    }

    emblaApi.on('pointerDown', pauseAutoplay)
    emblaApi.on('pointerUp', resumeAutoplay)
    emblaApi.on('select', pauseAutoplay)
    emblaApi.on('settle', resumeAutoplay)

    // Cleanup
    return () => {
      clearInterval(autoplay)
      emblaApi.off("select", handleSelect)
      emblaApi.off('pointerDown', pauseAutoplay)
      emblaApi.off('pointerUp', resumeAutoplay)
      emblaApi.off('select', pauseAutoplay)
      emblaApi.off('settle', resumeAutoplay)
    }
  }, [emblaApi])

  return (
    <section className="relative w-full h-[90vh] md:h-[100vh]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-[90vh] md:h-[100vh]">
              {/* Background Image with Enhanced Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt="Goa Car Rentals"
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
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
          <div className="inline-flex items-center px-3 py-1 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-orange-400 text-xs font-medium">Premium Car Rental Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white mb-6 leading-tight">
            Experience <span className="text-orange-400">Luxury</span> on Wheels
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover the perfect blend of comfort and style with our premium fleet of vehicles in Goa 🌴
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg" 
            className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/cars" className="flex items-center space-x-2">
              <Car className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <span>View Our Fleet</span>
            </Link>
          </Button>
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-white text-sm animate-pulse">
        <ChevronRight className="rotate-90 w-4 h-4" />
        Scroll Down
      </div>
    </section>
  )
} 