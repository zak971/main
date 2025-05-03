"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Car, ArrowRight, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/hero1.jpg",
    alt: "Luxury car rental in Goa",
    title: "Premium Fleet",
    subtitle: "Explore Goa in style and comfort"
  },
  {
    image: "/images/hero2.jpg",
    alt: "Premium car fleet in Goa",
    title: "Unforgettable Journeys",
    subtitle: "Create memories on Goa's scenic roads"
  },
  {
    image: "/images/hero3.jpg",
    alt: "Goa car rental service",
    title: "Luxury",
    subtitle: "The finest vehicles for your Goa adventure"
  },
  {
    image: "/images/hero4.jpg",
    alt: "Car rental in Goa",
    title: "Freedom to Explore",
    subtitle: "Discover Goa at your own pace"
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
  const [activeIndex, setActiveIndex] = useState(0)

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
      setActiveIndex(emblaApi.selectedScrollSnap())
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
                  quality={90}
                  className="object-cover brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/80" />
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Content */}
      <div className="absolute inset-0 z-20">
        <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center">
          {/* Animated subtitle */}
          

          {/* Main Heading with animated slide titles */}
          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wide text-white mb-2 sm:mb-4 leading-tight">
              <span className="inline-block">Experience</span>{" "}
              <span className="inline-block relative">
                <span className="text-gray-100">
                  {slides[activeIndex].title}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white/80 to-transparent"></span>
              </span>
            </h1>
          </div>

          {/* Subheading with animated slide subtitles */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-10 leading-relaxed">
            {slides[activeIndex].subtitle}{" "}
            <span className="hidden sm:inline">with our premium fleet of vehicles</span> 🌴
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium transition-all duration-300 hover:shadow-xl shadow-lg active:scale-95 py-5 sm:py-6 px-6 sm:px-8 w-full rounded-xl"
            >
              <Link href="/cars" className="flex items-center justify-center space-x-3">
                <Car className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <span className="text-base font-semibold">Explore Our Fleet</span>
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium transition-all duration-300 hover:shadow-xl shadow-lg active:scale-95 py-5 sm:py-6 px-6 sm:px-8 w-full rounded-xl"
            >
              <Link href="/#contact" className="flex items-center justify-center space-x-3">
                <Map className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <span className="text-base font-semibold">Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Dots - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden sm:block">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      
      
    </section>
  )
} 