"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BlogContentProps {
  content: string
  className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
  return (
    <div 
      className={cn(
        // Base styling
        "prose prose-invert max-w-none",
        // Size and spacing
        "lg:prose-lg",
        // Headings
        "prose-headings:font-bold prose-headings:tracking-tight prose-headings:mb-4",
        "prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:text-orange-400 prose-h2:mt-10 prose-h2:mb-6",
        "prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:text-gray-100 prose-h3:mt-8 prose-h3:mb-4",
        "prose-h4:text-lg prose-h4:sm:text-xl prose-h4:text-gray-300 prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-3",
        // Paragraphs and text
        "prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-4",
        "prose-strong:text-white prose-strong:font-semibold",
        // Lists - enhanced for better bullet point display
        "prose-ul:text-gray-300 prose-ul:my-6 prose-ul:pl-6 prose-ul:list-disc",
        "prose-ol:text-gray-300 prose-ol:my-6 prose-ol:pl-6 prose-ol:list-decimal",
        "prose-li:my-3 prose-li:pl-2 marker:text-orange-400",
        // Links
        "prose-a:text-orange-400 prose-a:no-underline prose-a:transition-colors prose-a:duration-300 prose-a:hover:text-orange-300",
        // Custom classes
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
} 