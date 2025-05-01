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
    alt: "Luxury car rental in Goa",
  },
  {
    image: "/images/hero2.jpg",
    alt: "Premium car fleet in Goa",
  },
  {
    image: "/images/hero3.jpg",
    alt: "Goa car rental service",
  },
  {
    image: "/images/hero4.jpg",
    alt: "Car rental in Goa",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    skipSnaps: true
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

    // Add autoplay with reduced interval
    let autoplay: NodeJS.Timeout
    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
      }, 5000) // Increased interval to 5 seconds
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
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  quality={75}
                  className="object-cover brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/70" />
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wide text-white mb-4 sm:mb-6 leading-tight">
            Experience <span className="text-gray-100">Luxury</span> on Wheels
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
            Discover the perfect blend of comfort and style with our premium fleet of vehicles in Goa 🌴
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg" 
            className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] shadow-md"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-gray-800/80 hover:bg-gray-700/80 border-none text-gray-200 shadow-lg backdrop-blur-md h-8 w-8 sm:h-10 sm:w-10"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-gray-800/80 hover:bg-gray-700/80 border-none text-gray-200 shadow-lg backdrop-blur-md h-8 w-8 sm:h-10 sm:w-10"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      {/* Scroll Indicator - Only show on desktop */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-2 text-gray-200 text-sm animate-pulse">
        <ChevronRight className="rotate-90 w-4 h-4" />
        Scroll Down
      </div>
    </section>
  )
} 