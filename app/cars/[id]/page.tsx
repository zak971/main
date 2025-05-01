import Link from "next/link"
import { notFound } from "next/navigation"
import { Car, Users, Fuel, Settings, Check, Phone, PhoneIcon as WhatsApp, ArrowLeft, Clock, Wallet, Shield, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCar } from "@/lib/cars"
import { CarImageCarousel } from "@/components/car-image-carousel"

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await getCar(id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gray-800/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative px-4 pt-20 sm:pt-24 pb-12 sm:pb-16 mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 sm:mb-8 text-gray-900 hover:text-gray-700 hover:bg-gray-200/50">
          <Link href="/cars" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl">
            <CarImageCarousel 
              images={car.images || [car.image || "/images/car-placeholder.jpg"]}
              carName={car.name}
            />
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{car.name}</h1>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-700">₹{car.price}<span className="text-base sm:text-lg font-normal text-gray-500 ml-1">/day</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gray-200/50 rounded-lg mr-3 sm:mr-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Seats</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{car.seats} Persons</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gray-200/50 rounded-lg mr-3 sm:mr-4">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Transmission</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{car.transmission}</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gray-200/50 rounded-lg mr-3 sm:mr-4">
                  <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Fuel Type</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{car.fuelType}</p>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gray-200/50 rounded-lg mr-3 sm:mr-4">
                  <Car className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Air Conditioning</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">Yes</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button 
                asChild
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={`https://wa.me/919307055218?text=I'm%20interested%20in%20renting%20the%20${car.name}`} className="flex items-center justify-center">
                  <WhatsApp className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 shadow-md transition-all duration-300"
              >
                <Link href="tel:+919307055218" className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Book
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <TabsTrigger value="features" className="data-[state=active]:bg-gray-200/50 data-[state=active]:text-gray-900">Features</TabsTrigger>
              <TabsTrigger value="terms" className="data-[state=active]:bg-gray-200/50 data-[state=active]:text-gray-900">Terms</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-gray-200/50 data-[state=active]:text-gray-900">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-4 sm:mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Car Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {car.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-gray-700" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="terms" className="mt-4 sm:mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Rental Terms</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-gray-200/50 rounded-lg mt-0.5">
                      <Clock className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Minimum Rental Period</h4>
                      <p className="text-sm text-gray-700">24 hours from the time of pickup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-gray-200/50 rounded-lg mt-0.5">
                      <Wallet className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Security Deposit</h4>
                      <p className="text-sm text-gray-700">₹5,000 (refundable upon return in good condition)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 bg-gray-200/50 rounded-lg mt-0.5">
                      <Shield className="w-4 h-4 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900">Insurance</h4>
                      <p className="text-sm text-gray-700">Comprehensive insurance included</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 sm:mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/80 rounded-lg border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-gray-700 fill-gray-700" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-700">5.0</span>
                    </div>
                    <p className="text-sm text-gray-700">&quot;Excellent service! The car was in perfect condition and the staff was very helpful.&quot;</p>
                    <p className="text-xs text-gray-500">- Rahul S.</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-lg border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-gray-700 fill-gray-700" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-700">5.0</span>
                    </div>
                    <p className="text-sm text-gray-700">&quot;Smooth rental process and the car was exactly as described. Will definitely rent again!&quot;</p>
                    <p className="text-xs text-gray-500">- Priya M.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
