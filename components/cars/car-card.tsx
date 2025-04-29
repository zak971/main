"use client"

import Link from "next/link"
import Image from "next/image"
import { Car, Users, Fuel, Settings, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { CarType } from "@/types/car"

interface CarCardProps {
  car: CarType
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Link 
      href={`/cars/${car.id}`}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 active:scale-[0.98]"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={car.image || "/images/car-placeholder.jpg"}
          alt={car.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/images/car-placeholder.jpg"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {car.featured && (
          <Badge className="absolute top-3 right-3 bg-orange-500/90 backdrop-blur-sm text-white px-2 py-0.5 text-xs sm:text-sm font-medium border border-orange-400/30">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <div className="mb-4">
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

        <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6">
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
          className="w-full mt-6 border-2 border-orange-200 hover:border-orange-600 hover:text-orange-600 text-gray-700 font-medium transition-all duration-300 hover:bg-orange-50 group-hover:shadow-md text-sm sm:text-base"
        >
          <div className="flex items-center justify-center py-2 sm:py-2.5">
            View Details
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </Button>
      </div>
    </Link>
  )
} 