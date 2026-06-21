import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Detail Cleaning Services",
    tagline: "Veteran Owned. Ready To Serve.",
    phone: "(832) 483-5721",
    phoneHref: "tel:+18324835721",
    email: "info@detailcleaningservices.com",
    address: "9427 Clay Road, Houston, TX 77080, US",
    city: "Houston",
    serviceAreas: ["Houston", "Katy", "Bellaire", "Cypress", "Fulshear", "Jersey Village", "Missouri City", "Pearland", "Richmond", "Sugar Land", "Tomball"],
    license: "Licensed & Insured",
    since: "2009",
    google_rating: "5.0",
    review_count: "1584",
    emergency: false,
    theme: "navy",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Comprehensive cleaning for every room, ensuring a spotless and fresh living space.", urgent: false },
    { icon: "star", title: "Maid Services", desc: "Professional maid services tailored to your schedule, providing consistent cleanliness and comfort.", urgent: false },
    { icon: "clock", title: "One-Time Cleaning", desc: "Perfect for special occasions or a quick refresh, our one-time cleaning leaves your home sparkling.", urgent: false },
    { icon: "sparkles", title: "Recurring Cleaning", desc: "Maintain a consistently clean home with our flexible recurring cleaning plans.", urgent: false },
    { icon: "truck", title: "Move In/Out Cleaning", desc: "Thorough cleaning services for seamless transitions, making your move stress-free.", urgent: false },
    { icon: "wrench", title: "Deep Clean", desc: "Intensive cleaning that targets every nook and cranny, restoring your home's pristine condition.", urgent: false }
  ],

  testimonials: [
    { name: "Cathy O'banion", location: "Houston", stars: 5, text: "Had our first cleaning today... top to bottom... the house looked fabulous! Such attention to detail. Couldn't be happier with Francisca's work! After years of trying different services, Detail Cleaning Services truly stands out. The thoroughness was incredible." },
    { name: "E Sharp", location: "Katy", stars: 5, text: "Detail Cleaning Service’s exceptional professional team has been diligently cleaning my daughter’s home for a year now. On their first visit, they were punctual and attentively listened to my specific requests for a deep clean. Yesterday, I had my second cleaning by Liliana, who arrived promptly and fulfilled all my requests. I genuinely appreciate their meticulous attention to detail. I am a very satisfied customer with a cleaner, stress-free beautiful home." },
    { name: "Audrey", location: "Cypress", stars: 5, text: "Elena did an amazing job with my home today! Extreme attention to detail - the place is sparkling 🤩🥰✨ I got the deep clean to start and I will be signing up for the monthly clean. Definitely worth the price! My home feels brand new, and the peace of mind is priceless." }
  ],

  trustBadges: [
    "Veteran Owned", "Trusted Since 2009", "5-Star Rated", "Eco-Friendly Products", "Community Focused"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1584, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Veteran Owned", desc: "Proudly veteran-owned and operated, bringing discipline and dedication to every job." },
    { icon: "shield-check", title: "Trusted Since 2009", desc: "Over a decade of reliable service, building trust in the Houston community." },
    { icon: "star", title: "Highest Rated", desc: "Consistently the highest-rated cleaning service with thousands of positive reviews." },
    { icon: "heart", title: "Eco-Friendly Products", desc: "Committed to using safe, environmentally friendly cleaning solutions for your home." },
    { icon: "thumbs-up", title: "Community Involvement", desc: "Actively supporting local charities and organizations, giving back to our community." },
    { icon: "sparkles", title: "Attention to Detail", desc: "Meticulous cleaning ensures every corner of your home sparkles and shines." }
  ],

  formServiceOptions: ["House Cleaning", "Maid Services", "One-Time Cleaning", "Recurring Cleaning", "Move In/Out Cleaning", "Deep Clean"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!