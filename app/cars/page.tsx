"use client"

import { useState, useEffect } from "react"
import { CarCard } from "@/components/cars/car-card"
import { getCars } from "@/lib/cars"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { CarType } from "@/types/car"

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cars, setCars] = useState<CarType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch cars data on component mount
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCars()
        setCars(carsData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching cars:", error)
        setIsLoading(false)
      }
    }
    
    fetchCars()
  }, [])

  // Filter cars based on search query
  const filteredCars = cars.filter((car) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true // Show all cars if search is empty
    
    return (
      car.name.toLowerCase().includes(query) || 
      car.type.toLowerCase().includes(query)
    )
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section - Optimized */}
      <div className="relative h-[50vh] sm:h-[60vh] w-full">
        <Image
          src="/images/front.jpg"
          alt="Premium Car Fleet"
          fill
          className="object-cover brightness-110 contrast-110"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 sm:space-y-8 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Discover Your <span className="text-orange-400 italic">Perfect Ride</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of luxury and premium vehicles, designed for your comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Cars Grid Section - Optimized */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers - Optimized */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements - Optimized */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header - Optimized */}
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Our Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Premium <span className="text-gray-300 italic">Vehicles</span> for Every Journey
            </h2>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              Choose from our carefully curated collection of luxury and premium vehicles, each designed to provide the ultimate driving experience.
            </p>
            
            {/* Search Filter */}
            <div className="w-full max-w-lg mt-6 sm:mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search by car name or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 py-6 focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cars Grid - Optimized */}
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-300">No cars found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
