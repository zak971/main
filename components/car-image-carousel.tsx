"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'

interface CarImageCarouselProps {
  images: string[]
  carName: string
  onThumbnailClick?: (index: number) => void
}

export function CarImageCarousel({ images, carName, onThumbnailClick }: CarImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi && onThumbnailClick) {
      onThumbnailClick(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi, onThumbnailClick])

  useEffect(() => {
    if (emblaApi) {
      onSelect()
      emblaApi.on('select', onSelect)
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi, onSelect])

  const carouselImages = images.length > 0 ? images : ['/images/car-placeholder.jpg']

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image
                  src={image}
                  alt={`${carName} - View ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 