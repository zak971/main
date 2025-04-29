"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Car, Users, Fuel, Settings, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { CarType } from "@/types/car"
import { getCars } from "@/lib/cars"

export function FeaturedCars() {
  const [cars, setCars] = useState<CarType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCars = async () => {
      try {
        const allCars = await getCars(true)
        setCars(allCars)
      } catch (error) {
        console.error("Error loading cars:", error)
      } finally {
        setLoading(false)
      }
    }
    loadCars()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <Skeleton className="w-full h-72" />
            <div className="p-6">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-6" />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-10" />
                ))}
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No featured cars available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <Link 
          key={car.id} 
          href={`/cars/${car.id}`}
          className="group relative bg-gradient-to-br from-white to-orange-50/30 rounded-xl sm:rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 active:scale-[0.98]"
        >
          {/* Image Container with Overlay on Hover */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={car.image || "/images/car-placeholder.jpg"}
              alt={car.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Featured Tag */}
            <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm border border-orange-400/30 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 inline-block" />
              Featured
            </Badge>

            {/* Quick Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 sm:p-2 bg-orange-500/20 rounded-lg backdrop-blur-sm">
                    <Car className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">{car.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 sm:p-2 bg-orange-500/20 rounded-lg backdrop-blur-sm">
                    <Fuel className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">{car.fuelType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                {car.name}
              </h3>
              <div className="flex items-baseline space-x-1 sm:space-x-2">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  ₹{car.price}
                </p>
                <span className="text-sm sm:text-base font-normal text-gray-500">/day</span>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{car.seats} Seats</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300">
                  <Fuel className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{car.fuelType}</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl group-hover:shadow-md transition-all duration-300">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">A/C</span>
              </div>
            </div>

            {/* View Details Button */}
            <Button 
              asChild
              variant="outline" 
              className="w-full border-2 border-orange-200 hover:border-orange-600 hover:text-orange-600 text-gray-700 font-medium transition-all duration-300 hover:bg-orange-50 group-hover:shadow-md text-sm sm:text-base"
            >
              <div className="flex items-center justify-center py-2 sm:py-2.5">
                View Details
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}
