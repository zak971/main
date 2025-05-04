import Image from "next/image"
import Link from "next/link"
import type { BlogType } from "@/types/blog"
import { CalendarDays, Clock } from "lucide-react"

interface BlogCardProps {
  blog: BlogType
}

export function BlogCard({ blog }: BlogCardProps) {
  // Use the blog index to pick a different hero image for each blog
  const blogIndex = parseInt(blog.id);
  const heroImage = `/images/hero${blogIndex}.jpg`;

  return (
    <Link 
      href={`/blogs/${blog.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:shadow-orange-500/10 hover:border-orange-400/20 hover:scale-[1.02]"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70" />
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {blog.title}
        </h3>
        
        <p className="flex-1 text-sm text-gray-300 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3 w-3" />
            <span>{blog.publishedAt}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 