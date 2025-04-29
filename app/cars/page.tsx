import { CarCard } from "@/components/cars/car-card"
import { getCars } from "@/lib/cars"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Fleet | Premium Car Rental Service",
  description: "Explore our premium fleet of vehicles. From luxury sedans to spacious SUVs, find the perfect car for your journey.",
}

export default async function CarsPage() {
  const cars = await getCars()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/front.jpg"
          alt="Premium Car Fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Premium <span className="text-orange-400">Fleet</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Discover our collection of luxury and premium vehicles, designed for your comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Cars Grid Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
