import { MetadataRoute } from 'next'
import { getCars } from '@/lib/cars'
import { getBlogs } from '@/lib/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://goacarrental.in'
  
  // Get all cars and blogs for dynamic routes
  const cars = await getCars()
  const blogs = await getBlogs()
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]
  
  // Dynamic routes for cars
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/cars/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Dynamic routes for blogs
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: new Date(blog.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))
  
  // Combine all routes
  return [...staticRoutes, ...carRoutes, ...blogRoutes]
} 