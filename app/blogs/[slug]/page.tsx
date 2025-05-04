import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogBySlug, getBlogs } from "@/lib/blogs"
import { notFound } from "next/navigation"
import type { BlogType } from "@/types/blog"
import { BlogContent } from "@/components/blogs/blog-content"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: BlogType) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  // Use the blog index to pick a different hero image for each blog
  const blogIndex = parseInt(blog.id);
  const heroImage = `/images/hero${blogIndex}.jpg`;
  
  return {
    title: `${blog.title} | Goa Car Rental Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://goacarrental.in/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      images: [{ url: heroImage, width: 1200, height: 630, alt: blog.title }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Use the blog index to pick a different hero image for each blog, same as blog-card
  const blogIndex = parseInt(blog.id);
  const heroImage = `/images/hero${blogIndex}.jpg`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
        <Image
          src={heroImage}
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