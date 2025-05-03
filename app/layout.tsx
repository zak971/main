import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// Import will be re-added after successful deployment
// import { Analytics } from '@vercel/analytics/react'

import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: "Goa Car Rentals",
  description: "Premium car rental service in Goa",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <MobileNav />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
          {/* Analytics component will be re-added after deployment */}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
