import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Rental in Goa | Self-Drive Cars",
  description: "Explore our collection of luxury and premium vehicles, designed for your comfort and style.",
  metadataBase: new URL('https://goacarrental.in'),
  alternates: {
    canonical: "https://goacarrental.in/cars",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://goacarrental.in/',
    siteName: 'GoaCarRental.in',
    images: [{
      url: '/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Car Rental in Goa | Self-Drive Cars'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    images: '/images/twitter-image.jpg'
  }
}