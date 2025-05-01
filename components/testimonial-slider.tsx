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
      className="relative py-8 sm:py-12"
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
              <Card className="bg-gradient-to-br from-gray-800/95 via-gray-900/90 to-gray-800/95 border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 md:gap-10">
                    {/* Left Column - Image and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl border-2 border-gray-700/30 shadow-lg mx-auto md:mx-0 group-hover:border-gray-600/50 transition-all duration-500">
                        <Image
                          src={testimonial.image || "/images/avatar-placeholder.jpg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent" />
                        <div className="absolute inset-0 bg-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/90 to-transparent">
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < testimonial.rating ? "text-gray-300 fill-gray-300" : "text-gray-600"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-6 text-center md:text-left">
                        <h4 className="font-bold text-xl sm:text-2xl text-gray-100 group-hover:text-white transition-colors duration-500">{testimonial.name}</h4>
                        <p className="text-gray-300 text-sm sm:text-base font-medium mt-1 group-hover:text-gray-200 transition-colors duration-500">{testimonial.role}</p>
                        <div className="flex items-center justify-center md:justify-start mt-2 sm:mt-3 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">
                          <span className="mr-1">📍</span> {testimonial.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Testimonial Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700/30 mr-3 sm:mr-4 group-hover:text-gray-600/30 transition-colors duration-500" />
                      </div>
                      <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 font-light group-hover:text-gray-100 transition-colors duration-500 italic">{testimonial.text}</p>
                      <div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-700/70 group-hover:text-gray-600/70 transition-colors duration-500" />
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
        className="absolute left-0 z-10 -translate-y-1/2 bg-gray-800/90 border-gray-700/50 text-gray-200 hover:bg-gray-700/90 top-1/2 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={prev}
        disabled={current === 0}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 z-10 -translate-y-1/2 bg-gray-800/90 border-gray-700/50 text-gray-200 hover:bg-gray-700/90 top-1/2 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={next}
        disabled={current === testimonials.length - 1}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-gray-300 w-8 sm:w-10 hover:bg-gray-200" 
                : "bg-gray-600 hover:bg-gray-500 w-2.5 sm:w-3"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
