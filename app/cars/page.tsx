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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements - Optimized */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gray-800/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

        <div className="container relative px-4 sm:px-6 mx-auto">
          {/* Section Header - Optimized */}
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200/50">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Our Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Premium <span className="text-gray-600 italic">Vehicles</span> for Every Journey
            </h2>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
              Choose from our carefully curated collection of luxury and premium vehicles, each designed to provide the ultimate driving experience.
            </p>
          </div>

          {/* Cars Grid - Optimized */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
