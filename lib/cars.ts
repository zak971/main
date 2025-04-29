import type { CarType } from "@/types/car"

// Mock data for cars
const carsData: CarType[] = [
  {
    id: "1",
    name: "Toyota Innova Crysta",
    type: "SUV",
    carType: "SUV",
    image: "/images/innovaf.png",
    images: ["/images/innovaf.png", "/images/in-side.jpg", "/images/Innova.jpeg", "/images/innova2.jpg"],
    price: 3500,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    featured: true,
    description: "Spacious and comfortable SUV perfect for family trips",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "First Aid Kit",
      "Spare Tire",
      "GPS Navigation",
      "Reverse Camera"
    ]
  },
  {
    id: "2",
    name: "Maruti Swift Dzire",
    type: "Sedan",
    carType: "Sedan",
    image: "/images/s-f.png",
    images: ["/images/s-f.png"],
    price: 1500,
    seats: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    featured: true,
    description: "Fuel-efficient sedan perfect for city driving",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "First Aid Kit",
      "Spare Tire"
    ]
  },
  {
    id: "3",
    name: "Hyundai Creta",
    type: "SUV",
    carType: "SUV",
    image: "/images/h-f.png",
    images: ["/images/h-f.png"],
    price: 2800,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    featured: true,
    description: "Premium SUV with modern features and comfort",
    available: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "USB Port",
      "Power Steering",
      "Power Windows",
      "Central Locking",
      "Music System",
      "Child Seat",
      "First Aid Kit",
      "Spare Tire",
      "GPS Navigation",
      "Reverse Camera",
      "Sunroof"
    ]
  },
  {
    id: "4",
    name: "Mahindra Thar",
    type: "SUV",
    carType: "SUV",
    image: "/images/t-f.png",
    images: ["/images/t-f.png"],
    price: 3000,
    seats: 4,
    transmission: "Manual",
    fuelType: "Diesel",
    featured: false,
  },
  {
    id: "5",
    name: "Honda City",
    type: "Sedan",
    carType: "Sedan",
    image: "/images/f-f.png",
    images: ["/images/f-f.png"],
    price: 2200,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    featured: false,
  },
  {
    id: "6",
    name: "Maruti Ertiga",
    type: "MPV",
    carType: "MPV",
    image: "/images/e-f.png",
    images: ["/images/e-f.png"],
    price: 2800,
    seats: 7,
    transmission: "Manual",
    fuelType: "Petrol",
    featured: false,
  },
  {
    id: "7",
    name: "Toyota Fortuner",
    type: "SUV",
    carType: "SUV",
    image: "/images/f-f.png",
    images: ["/images/f-f.png"],
    price: 4000,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    featured: false,
  },
  {
    id: "8",
    name: "Hyundai Venue",
    type: "SUV",
    carType: "SUV",
    image: "/images/v-f.png",
    images: ["/images/v-f.png"],
    price: 1800,
    seats: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    featured: false,
  },
  {
    id: "9",
    name: "Kia Seltos",
    type: "SUV",
    carType: "SUV",
    image: "/images/k-f.png",
    images: ["/images/k-f.png"],
    price: 2300,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    featured: false,
  },
]

// In a real application, these functions would interact with a database
export async function getCars(featuredOnly = false): Promise<CarType[]> {
  if (featuredOnly) {
    return carsData.filter((car) => car.featured)
  }
  return carsData
}

export async function getCar(id: string): Promise<CarType | null> {
  const car = carsData.find((car) => car.id === id)
  return car || null
}

export async function addCar(car: Omit<CarType, "id">): Promise<CarType> {
  const newCar = {
    ...car,
    id: Math.random().toString(36).substring(2, 9),
  }

  carsData.push(newCar)
  return newCar
}

export async function updateCar(id: string, car: Partial<CarType>): Promise<CarType> {
  const index = carsData.findIndex((c) => c.id === id)

  if (index === -1) {
    throw new Error("Car not found")
  }

  carsData[index] = { ...carsData[index], ...car }
  return carsData[index]
}

export async function deleteCar(id: string): Promise<void> {
  const index = carsData.findIndex((c) => c.id === id)

  if (index === -1) {
    throw new Error("Car not found")
  }

  carsData.splice(index, 1)
}
