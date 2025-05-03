"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Send, User, Mail, Phone, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  carType: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

interface FormError {
  message: string
  field?: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      carType: "",
      message: "",
    },
  })

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `
*New Car Rental Inquiry*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Interested In: ${data.carType || "Not specified"}
Message: ${data.message}
      `.trim()

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      
      // WhatsApp number - replace with your actual business WhatsApp number
      const whatsappNumber = "919307055218" // Format: country code without + followed by number
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Your inquiry has been sent via WhatsApp. We'll get back to you as soon as possible.",
      })
      
      // Reset the form
      form.reset()
    } catch (error: unknown) {
      const formError = error as FormError
      console.error("Form submission error:", formError)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-neutral-400" />
                <span>Full Name</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-orange-500 focus-visible:border-orange-500"
                />
              </FormControl>
              <FormMessage className="text-orange-400" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>Email</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    {...field}
                    className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-orange-500 focus-visible:border-orange-500"
                  />
                </FormControl>
                <FormMessage className="text-orange-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-neutral-400" />
                  <span>Phone Number</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+91 98765 43210" 
                    {...field}
                    className="bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-orange-500 focus-visible:border-orange-500"
                  />
                </FormControl>
                <FormMessage className="text-orange-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="carType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-neutral-800/50 border-neutral-700 text-white focus:ring-orange-500">
                    <SelectValue placeholder="Select car type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                  <SelectItem value="SUV" className="hover:bg-neutral-700 focus:bg-neutral-700">SUV</SelectItem>
                  <SelectItem value="Sedan" className="hover:bg-neutral-700 focus:bg-neutral-700">Sedan</SelectItem>
                  <SelectItem value="MPV" className="hover:bg-neutral-700 focus:bg-neutral-700">MPV</SelectItem>
                  <SelectItem value="Luxury" className="hover:bg-neutral-700 focus:bg-neutral-700">Luxury</SelectItem>
                  <SelectItem value="Economy" className="hover:bg-neutral-700 focus:bg-neutral-700">Economy</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-orange-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-neutral-400" />
                <span>Message</span>
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your requirements, travel dates, etc..." 
                  className="min-h-[120px] bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-orange-500 focus-visible:border-orange-500" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-orange-400" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
