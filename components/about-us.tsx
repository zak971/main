"use client"

export default function AboutUs() {
  return (
    <div className="container relative px-4 sm:px-6 mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center px-4">
        <div className="inline-flex items-center justify-center px-5 py-2 mb-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
          <span className="text-sm font-medium text-white tracking-wide uppercase">About Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight">
          Your Trusted Car Rental Partner in Goa
        </h2>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed">
          Delivering premium self-drive experiences with transparent pricing and exceptional customer service.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-300 text-center">
          <p>
            At <span className="font-semibold text-white">GoaCarRental.in</span>, we believe that exploring Goa should be easy,
            comfortable, and on your own terms. That's why we started our car rental service
            right here in Goa—with a simple goal: to give travelers and locals a better way to move.
          </p>
          
         
          
          <p>
            Choose from a wide range of vehicles—from compact hatchbacks to spacious SUVs. Every car is
            regularly serviced, sanitized, and maintained to ensure a safe and smooth ride.
          </p>
          
          <p>
            Thousands of happy travelers trust us for their car rental needs in Goa. No hidden charges.
            No long waits. Just honest pricing and hassle-free bookings. Wherever you're headed, we'll get you there—comfortably and confidently.
          </p>
        </div>
      </div>
    </div>
  );
} 