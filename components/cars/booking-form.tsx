"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { CarType } from "@/types/car"

interface BookingFormProps {
  car: CarType
}

export function BookingForm({ car }: BookingFormProps) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add booking logic here
    console.log("Booking submitted", { car, startDate, endDate })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Start Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">End Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="text-lg font-semibold">
          Total: ₹{car.price}/day
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Book Now
        </Button>
      </div>
    </form>
  )
} 