"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogBySlug } from "@/lib/blogs"
import { notFound, useParams } from "next/navigation"
import type { BlogType } from "@/types/blog"
import { BlogContent } from "@/components/blogs/blog-content"
import { formatDate } from "@/lib/utils"

export default function Page() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadBlog() {
      if (params && params.slug) {
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
        try {
          const data = await getBlogBySlug(slug)
          if (data) {
            setBlog(data)
          } else {
            notFound()
          }
        } catch (error) {
          console.error("Error loading blog:", error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    loadBlog()
  }, [params])

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    )
  }

  if (!blog) {
    return notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
        <Image
          src="/images/front.jpg" // Using a placeholder image
          alt={blog.title}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 hover:text-orange-400 transition-all"
          >
            <Link href="/blogs" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blogs</span>
            </Link>
          </Button>
        </div>
        
        {/* Blog Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-orange-400" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-orange-400" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container relative px-4 sm:px-6 mx-auto">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              {/* Enhanced blog content styling with the new component */}
              <BlogContent content={blog.content} />
              
              <div className="mt-16 pt-8 border-t border-white/10">
                <Button 
                  variant="outline" 
                  asChild
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-orange-400 hover:border-orange-400/30 transition-all"
                >
                  <Link href="/blogs" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to All Articles</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 