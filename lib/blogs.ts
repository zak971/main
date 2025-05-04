import { BlogType } from "@/types/blog"

// Mock blog data
const blogsData: BlogType[] = [
  {
    id: "1",
    title: "Top 10 Places to Visit in Goa with a Rental Car",
    slug: "top-10-places-to-visit-in-goa-with-rental-car",
    excerpt: "Discover the most beautiful and must-visit places in Goa that are best explored with your own rental car.",
    coverImage: "/images/blogs/goa-places.jpg",
    publishedAt: "2023-06-15",
    readTime: "8 min read",
    content: `
      <h2 style="text-align: center; font-size: 1.25rem; font-weight: 600;">Exploring Goa's Hidden Gems by Car</h2>
      <p class="mb-5">
      Goa, with its pristine beaches, historic architecture, and vibrant culture, is best explored at your own pace. Having a rental car gives you the freedom to discover both popular tourist spots and hidden gems that most travelers miss.
      </p>
      
      <h3 class="text-xl font-semibold">1. Dudhsagar Falls</h3>
      <p class="mb-5">Located on the Mandovi River, Dudhsagar is one of India's tallest waterfalls. The journey itself is an adventure, taking you through wildlife sanctuaries and forest roads that are best navigated with a sturdy rental car.</p>
      
      <h3 class="text-xl font-semibold">2. Arambol Beach</h3>
      <p class="mb-5">Away from the crowded beaches of North Goa, Arambol offers a more authentic experience with its bohemian vibe, sunset drum circles, and sweet water lake nearby.</p>
      
      <h3 class="text-xl font-semibold">3. Fontainhas - Latin Quarter</h3>
      <p class="mb-5">Step back in time as you drive through the narrow streets of Fontainhas in Panjim, admiring the Portuguese-style houses painted in vibrant hues of blue, red, and yellow.</p>
      
      <h3 class="text-xl font-semibold">4. Chapora Fort</h3>
      <p class="mb-5">Made famous by the Bollywood movie "Dil Chahta Hai," Chapora Fort offers panoramic views of the coastline and is perfect for catching a sunset.</p>
      
      <h3 class="text-xl font-semibold">5. Butterfly Beach</h3>
      <p class="mb-5">One of Goa's most secluded beaches, accessible only by boat or a forest trek. With your rental car, you can drive close to the nearest access point and enjoy this hidden paradise.</p>
      
      <h3 class="text-xl font-semibold">6. Harvalem Waterfalls and Caves</h3>
      <p class="mb-5">A serene spot away from tourist crowds, featuring ancient caves with rock-cut linga dating back to the 7th century.</p>
      
      <h3 class="text-xl font-semibold">7. Mollem National Park</h3>
      <p class="mb-5">Home to diverse wildlife and the 12th-century Tambdi Surla Temple, this park is a must-visit for nature lovers.</p>
      
      <h3 class="text-xl font-semibold">8. Cola Beach</h3>
      <p class="mb-5">This hidden gem features a freshwater lagoon alongside the sea, creating a unique landscape perfect for photography enthusiasts.</p>
      
      <h3 class="text-xl font-semibold">9. Netravali Bubbling Lake</h3>
      <p class="mb-5">A natural phenomenon where bubbles rise from the lake bed, surrounded by dense forests and pristine nature.</p>
      
      <h3 class="text-xl font-semibold">10. Divar Island</h3>
      <p class="mb-5">Experience rural Goan life on this island accessible by ferry. Drive around to discover old Portuguese mansions and the Church of Our Lady of Piety.</p>
      
      <h2 class="text-xl font-semibold">Planning Your Road Trip</h2>
      <p class="mb-5">When exploring these destinations, it's best to rent a car that's suitable for Goa's diverse terrain. For beaches and city drives, a compact car works well, while locations like Dudhsagar Falls might require an SUV.</p>
      
      <p class="mb-5">Remember to plan your itinerary based on geographical proximity to save time and fuel. North Goa and South Goa attractions can be grouped together for efficient exploration.</p>
      
      <p class="mb-5">With your rental car from Goa Car Rentals, you're all set to create memories that last a lifetime while discovering the true essence of Goa at your own pace.</p>
    `
  },
  {
    id: "2",
    title: "Self-Drive vs Chauffeur Car Rentals in Goa",
    slug: "self-drive-vs-chauffeur-car-rentals-goa",
    excerpt: "Confused between driving yourself or hiring a chauffeur? This guide helps you decide what's best for your Goa trip.",
    coverImage: "/images/blogs/self-drive.jpg",
    publishedAt: "2023-07-20",
    readTime: "6 min read",
    content: `
      <h2 style="text-align: center; font-size: 1.25rem; font-weight: 600;">Making the Right Choice for Your Goa Adventure</h2>
      <p class="mb-5">When planning your trip to Goa, one of the most important decisions is how you'll get around. Both self-drive and chauffeur-driven car rentals have their unique advantages. Let's explore which option might be better suited for your specific needs.</p>
      
      <h3 class="text-xl font-semibold">Self-Drive: Freedom and Flexibility</h3>
      <p class="mb-5">Renting a self-drive car in Goa offers unparalleled freedom to explore at your own pace. Stop whenever you spot a beautiful viewpoint, change your plans last minute, or take that unexpected detour to a hidden beach you just heard about from a fellow traveler.</p>
      
      <h4 class="text-lg font-semibold">Advantages of Self-Drive:</h4>
      <ul class="list-disc pl-6">
        <li>Complete privacy during your travels</li>
        <li>Freedom to create and modify your itinerary on the go</li>
        <li>Often more economical for longer durations</li>
        <li>No time restrictions - explore late into the night if you wish</li>
        <li>Perfect for those who enjoy driving as part of the travel experience</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Considerations for Self-Drive:</h4>
      <ul>
        <li>You'll need to navigate unfamiliar roads</li>
        <li>Parking can sometimes be challenging in popular areas</li>
        <li>You'll need a valid driving license and be comfortable with local driving conditions</li>
      </ul>
      
      <h3 class="mt-6 text-xl font-semibold">Chauffeur-Driven: Convenience and Local Knowledge</h3>
      <p class="mb-5">Opting for a chauffeur-driven car allows you to sit back, relax, and enjoy the scenic beauty of Goa without worrying about directions or driving in unfamiliar territory.</p>
      
      <h4 class="text-lg font-semibold">Advantages of Chauffeur Service:</h4>
      <ul>
        <li>Benefit from local drivers' knowledge of hidden gems and shortcuts</li>
        <li>No stress about navigation or understanding local driving rules</li>
        <li>Freedom to enjoy a drink or two without worrying about driving back</li>
        <li>Ideal for business travelers who need to work while on the move</li>
        <li>Perfect for those unfamiliar with driving on Indian roads</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Considerations for Chauffeur Service:</h4>
      <ul>
        <li>Generally more expensive than self-drive options</li>
        <li>Less privacy compared to driving yourself</li>
        <li>Need to plan your schedule around driver availability</li>
      </ul>
      
      <h3 class="mt-6 text-xl font-semibold">Who Should Choose Self-Drive?</h3>
      <p class="mb-5">Self-drive is ideal for adventurous travelers who value independence and spontaneity. It's perfect for young couples seeking privacy, groups of friends looking to create their own adventure, or experienced travelers comfortable with driving in new environments.</p>
      
      <h3 class="mt-6 text-xl font-semibold">Who Should Choose Chauffeur-Driven?</h3>
      <p class="mb-5">Chauffeur services are best for first-time visitors to Goa, families with young children, senior travelers, business professionals, or anyone who wants to fully relax without the responsibility of driving.</p>
      
      <h3 class="mt-6 text-xl font-semibold">The Hybrid Approach</h3>
      <p class="mb-5">Many visitors to Goa opt for a combination - perhaps hiring a chauffeur for longer journeys to distant attractions like Dudhsagar Falls, while renting a self-drive vehicle or scooter for exploring nearby beaches and restaurants.</p>
      
      <p class="mb-5">At Goa Car Rentals, we offer both options with our fleet of well-maintained vehicles. Our experienced chauffeurs are knowledgeable about the best routes and hidden spots, while our self-drive cars come equipped with GPS navigation to ensure you never lose your way.</p>
      
      <p class="mb-5">Whatever your preference, we're here to make your Goa exploration seamless and memorable.</p>
    `
  },
  {
    id: "3",
    title: "What to Know Before Renting a Car in Goa",
    slug: "what-to-know-before-renting-car-goa",
    excerpt: "Essential tips and information to ensure a smooth car rental experience during your Goa vacation.",
    coverImage: "/images/blogs/rental-tips.jpg",
    publishedAt: "2023-08-25",
    readTime: "7 min read",
    content: `
      <h2 class="text-xl font-semibold">Essential Guide to Car Rentals in Goa</h2>
      <p class="mb-5">Renting a car in Goa can transform your holiday experience, offering convenience and freedom that public transport simply can't match. However, there are several important factors to consider before you sign that rental agreement.</p>
      
      <h3 class="text-xl font-semibold">Documentation Requirements</h3>
      <p class="mb-5">Before renting a car in Goa, ensure you have:</p>
      <ul class="list-disc pl-6">
        <li>A valid driving license (International Driving Permit for foreign tourists)</li>
        <li>Identity proof (passport for foreigners, Aadhar/PAN card for Indians)</li>
        <li>Address proof</li>
        <li>A credit card for the security deposit (though some agencies accept cash deposits)</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Understanding Rental Policies</h3>
      <p class="mb-5">Each rental company has different policies regarding:</p>
      <ul class="list-disc pl-6">
        <li>Mileage limits (some offer unlimited kilometers, others charge for exceeding a daily limit)</li>
        <li>Fuel policies (most require "full-to-full" - you receive the car with a full tank and return it the same way)</li>
        <li>Late return penalties</li>
        <li>Cancellation terms</li>
        <li>Additional driver fees</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Insurance Coverage</h3>
      <p class="mb-5">Don't overlook the importance of comprehensive insurance coverage. Basic insurance is usually included in the rental price, but consider additional coverage for:</p>
      <ul class="list-disc pl-6">
        <li>Personal accident insurance</li>
        <li>Zero deductible damage waiver</li>
        <li>Theft protection</li>
      </ul>
      <p class="mb-5">The small additional cost can save you significant stress and expense in case of an unfortunate incident.</p>
      
      <h3 class="text-xl font-semibold">Vehicle Inspection</h3>
      <p class="mb-5">Before driving away:</p>
      <ul class="list-disc pl-6">
        <li>Thoroughly inspect the car for existing damage</li>
        <li>Take photos of any scratches, dents, or interior issues</li>
        <li>Check that all features (AC, lights, wipers, etc.) are working properly</li>
        <li>Ensure the spare tire and jack are present and in good condition</li>
        <li>Verify the fuel level matches what's stated in your agreement</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Understanding Goa's Road Conditions</h3>
      <p class="mb-5">Goa's roads vary dramatically in quality:</p>
      <ul class="list-disc pl-6">
        <li>Main highways are generally well-maintained</li>
        <li>Beach roads and village routes can be narrow and sometimes unpaved</li>
        <li>During monsoon season (June-September), some roads may be flooded or damaged</li>
      </ul>
      <p class="mb-5">Choose your vehicle accordingly - a compact car is perfect for city driving, while an SUV might be better for exploring more remote areas.</p>
      
      <h3 class="text-xl font-semibold">Local Driving Customs</h3>
      <p class="mb-5">Familiarize yourself with local driving practices:</p>
      <ul class="list-disc pl-6">
        <li>Driving is on the left side of the road</li>
        <li>Honking is common and often used as a form of communication</li>
        <li>Watch out for two-wheelers that often weave through traffic</li>
        <li>Be prepared for free-roaming animals on rural roads</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Hidden Costs to Watch For</h3>
      <p class="mb-5">Be aware of potential additional charges:</p>
      <ul class="list-disc pl-6">
        <li>Airport pickup/drop-off surcharges</li>
        <li>Young driver fees (usually for drivers under 25)</li>
        <li>Equipment rental (GPS, child seats, etc.)</li>
        <li>Cleaning fees (if the car is returned excessively dirty)</li>
        <li>Out-of-state permits if traveling beyond Goa</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Booking in Advance</h3>
      <p class="mb-5">During peak tourist season (November-February), car rentals in Goa can be in high demand. Book at least 2-4 weeks in advance to secure your preferred vehicle and potentially benefit from early booking discounts.</p>
      
      <h3 class="text-xl font-semibold">Local vs. International Rental Companies</h3>
      <p class="mb-5">International chains offer standardized service but often at higher prices. Local Goan rental companies typically provide more competitive rates and greater flexibility, though service standards may vary.</p>
      
      <p class="mb-5">At Goa Car Rentals, we pride ourselves on combining the best of both worlds - reliable service with local expertise and competitive pricing. We're always transparent about our policies and work to ensure our customers have a worry-free experience exploring beautiful Goa.</p>
    `
  },
  {
    id: "4",
    title: "How to Choose the Right Car for a Goa Road Trip",
    slug: "choose-right-car-goa-road-trip",
    excerpt: "Find the perfect vehicle for your Goan adventure based on your travel style, group size, and destinations.",
    coverImage: "/images/blogs/choose-car.jpg",
    publishedAt: "2023-09-10",
    readTime: "5 min read",
    content: `
      <h2 class="text-xl font-semibold">Finding Your Perfect Road Trip Companion</h2>
      <p class="mb-5">The car you choose for your Goa adventure can significantly impact your overall experience. From fuel efficiency to comfort on long drives, each vehicle type offers different advantages depending on your specific needs and travel plans.</p>
      
      <h3 class="text-xl font-semibold">Consider Your Group Size</h3>
      <p class="mb-5">The number of travelers in your group is one of the most important factors in choosing the right rental car:</p>
      
      <h4 class="text-lg font-semibold">Solo Travelers or Couples</h4>
      <ul class="list-disc pl-6">
        <li>Compact cars like Hyundai i10 or Maruti Swift are ideal</li>
        <li>Offer excellent fuel efficiency</li>
        <li>Easy to park in crowded beach areas</li>
        <li>Sufficient trunk space for a couple of suitcases</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Small Families or Groups (3-4 people)</h4>
      <ul class="list-disc pl-6">
        <li>Mid-size sedans such as Honda City or Hyundai Verna provide good balance</li>
        <li>More comfortable for longer journeys</li>
        <li>Additional legroom for passengers</li>
        <li>Larger trunk capacity for family luggage</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Larger Groups (5-7 people)</h4>
      <ul class="list-disc pl-6">
        <li>SUVs like Toyota Innova or Mahindra XUV500</li>
        <li>MPVs such as Maruti Ertiga offer spacious interiors</li>
        <li>Comfortable seating for everyone</li>
        <li>Abundant luggage space for multiple bags</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Match the Car to Your Itinerary</h3>
      <p class="mb-5">Your planned destinations within Goa should influence your vehicle choice:</p>
      
      <h4 class="text-lg font-semibold">Beach-Hopping and City Exploration</h4>
      <ul class="list-disc pl-6">
        <li>Compact or mid-size cars are sufficient</li>
        <li>Easy maneuverability through narrow city streets</li>
        <li>Better fuel efficiency for multiple short trips</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Off-the-Beaten-Path Adventures</h4>
      <ul class="list-disc pl-6">
        <li>SUVs with higher ground clearance are recommended</li>
        <li>Better handling on unpaved roads to remote beaches</li>
        <li>More suitable for hilly terrain in places like Chorla Ghats</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Long-Distance Exploration</h4>
      <ul class="list-disc pl-6">
        <li>If you're planning to venture beyond Goa to Karnataka or Maharashtra</li>
        <li>Choose vehicles with greater comfort and reliable performance</li>
        <li>Consider factors like additional legroom and superior suspension</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Budget Considerations</h3>
      <p class="mb-5">Your rental budget will significantly influence your options:</p>
      
      <h4 class="text-lg font-semibold">Economy Options</h4>
      <ul class="list-disc pl-6">
        <li>Hatchbacks like Maruti Alto or Tata Tiago</li>
        <li>Most fuel-efficient choice</li>
        <li>Lowest daily rental rates</li>
        <li>Minimal security deposit requirements</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Mid-Range Options</h4>
      <ul class="list-disc pl-6">
        <li>Compact SUVs like Hyundai Creta or Kia Seltos</li>
        <li>Balance of comfort and reasonable pricing</li>
        <li>Better features and amenities</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Premium Options</h4>
      <ul class="list-disc pl-6">
        <li>Luxury sedans or SUVs for those seeking maximum comfort</li>
        <li>Advanced features like leather seats, premium sound systems</li>
        <li>Superior driving experience</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Consider the Season</h3>
      <p class="mb-5">Goa's weather conditions vary seasonally and can affect your vehicle choice:</p>
      
      <h4 class="text-lg font-semibold">Monsoon Season (June-September)</h4>
      <ul class="list-disc pl-6">
        <li>SUVs with good ground clearance are recommended</li>
        <li>Better handling on potentially waterlogged roads</li>
        <li>More stable in heavy rain conditions</li>
      </ul>
      
      <h4 class="text-lg font-semibold">Peak Tourist Season (October-March)</h4>
      <ul class="list-disc pl-6">
        <li>Consider vehicles with efficient air conditioning</li>
        <li>Smaller cars may be advantageous for finding parking at crowded attractions</li>
      </ul>
      
      <h3 class="text-xl font-semibold">Manual vs. Automatic Transmission</h3>
      <p class="mb-5">Your driving preference and experience should guide this choice:</p>
      <ul class="list-disc pl-6">
        <li>Manual transmissions are more common and typically less expensive</li>
        <li>Automatic transmissions offer greater convenience, especially in stop-and-go beach town traffic</li>
        <li>If you're not used to driving manual, stick with automatic to avoid additional stress</li>
      </ul>
      
      <p class="mb-5">At Goa Car Rentals, we offer vehicles across all these categories to match every preference and requirement. Our team can help you assess your specific needs and recommend the perfect car for your Goan adventure. Remember, the right vehicle choice sets the foundation for a memorable and comfortable road trip experience in this beautiful coastal paradise.</p>
    `
  }
]

/**
 * Get all blogs
 */
export async function getBlogs(): Promise<BlogType[]> {
  // In a real application, this would fetch from an API or database
  return blogsData
}

/**
 * Get a specific blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogType | undefined> {
  return blogsData.find((blog) => blog.slug === slug)
} 