"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
  role?: string
  date?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John ",
    role: "Business Traveler",
    location: "Delhi",
    rating: 5,
    image: "/images/friend.jpg",
    text: "Exceptional service and an outstanding car. This made my trip to Goa absolutely seamless.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Tourist",
    location: "Mumbai",
    rating: 5,
    image: "/images/men.jpg",
    text: "Rented a car for 3 days and had zero complaints. Smooth, efficient, and stylish!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Family Vacation",
    location: "UK",
    rating: 4,
    image: "/images/about.jpg",
    text: "Perfect vehicle for our family road trip across Goa. Spacious and clean!",
    date: "2 months ago"
  }
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const next = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  useEffect(() => {
    if (isHovered || isTransitioning) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [next, isHovered, isTransitioning])

  return (
    <div 
      className="relative py-8 sm:py-12 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-800 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  idx === current 
                    ? "opacity-100 translate-x-0" 
                    : idx < current 
                      ? "-translate-x-full opacity-0" 
                      : "translate-x-full opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full px-4 sm:px-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-700 shadow-lg">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={128}
                      height={128}
                      className="object-cover"
                      priority={idx === current}
                    />
                  </div>
                  <div className="text-center md:text-left max-w-xl">
                    <p className="text-neutral-300 text-lg italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-neutral-400 text-sm">{testimonial.role} — {testimonial.location}</p>
                      <div className="flex justify-center md:justify-start mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-600"}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              disabled={isTransitioning}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 sm:p-2 backdrop-blur-sm border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              disabled={isTransitioning}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 sm:p-2 backdrop-blur-sm border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-white scale-110" 
                    : "bg-neutral-600 hover:bg-neutral-500"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
