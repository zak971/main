"use client"

import { CarGallery } from "@/components/cars/car-gallery"
import { CarFeatures } from "@/components/cars/car-features"
import { BookingForm } from "@/components/cars/booking-form"
import type { CarType } from "@/types/car"

interface CarDetailsProps {
  car: CarType
}

export function CarDetails({ car }: CarDetailsProps) {
  return (
    <div className="space-y-8">
      <CarGallery car={car} />
      <CarFeatures car={car} />
      <BookingForm car={car} />
    </div>
  )
} 