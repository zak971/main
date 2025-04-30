"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    name: "John Doe",
    location: "Delhi",
    image: "/images/friend.jpg",
    rating: 5,
    text: "Excellent service! The car was clean and well-maintained. Will definitely rent again.",
    role: "Business Traveler",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah Smith",
    location: "Mumbai",
    image: "/images/men.jpg",
    rating: 5,
    text: "Great experience renting a car in Goa. The process was smooth and the staff was helpful.",
    role: "Tourist",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "UK",
    image: "/images/about.jpg",
    rating: 4,
    text: "Perfect for our family vacation. The SUV was spacious and comfortable.",
    role: "Family Vacation",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Emily Brown",
    location: "Bangalore",
    image: "/images/about.jpg",
    rating: 5,
    text: "Best car rental service in Goa. Always reliable and professional.",
    role: "Local Resident",
    date: "3 weeks ago"
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => {
    setCurrent((current + 1) % testimonials.length)
  }, [current])

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, isHovered, next])

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out will-change-transform"
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8">
                    {/* Left Column - Image and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 overflow-hidden rounded-2xl border-2 border-orange-500/30 shadow-lg mx-auto md:mx-0">
                        <Image
                          src={testimonial.image || "/images/avatar-placeholder.jpg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      </div>
                      <div className="mt-3 sm:mt-5 text-center md:text-left">
                        <h4 className="font-semibold text-lg sm:text-xl text-white">{testimonial.name}</h4>
                        <p className="text-orange-400 text-xs sm:text-sm font-medium mt-1">{testimonial.role}</p>
                        <div className="flex items-center justify-center md:justify-start mt-1 sm:mt-2 text-gray-400 text-xs sm:text-sm">
                          <span className="mr-1">📍</span> {testimonial.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Testimonial Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3 sm:mb-5">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500/30 mr-2 sm:mr-3" />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light">{testimonial.text}</p>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-500/70" />
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 z-10 -translate-y-1/2 bg-white/10 border-gray-700/50 text-white hover:bg-white/20 top-1/2 backdrop-blur-sm rounded-full w-8 h-8 sm:w-12 sm:h-12"
        onClick={prev}
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 z-10 -translate-y-1/2 bg-white/10 border-gray-700/50 text-white hover:bg-white/20 top-1/2 backdrop-blur-sm rounded-full w-8 h-8 sm:w-12 sm:h-12"
        onClick={next}
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 sm:mt-10 space-x-2 sm:space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-orange-500 w-6 sm:w-8" : "bg-gray-600 hover:bg-gray-500 w-2 sm:w-2.5"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
