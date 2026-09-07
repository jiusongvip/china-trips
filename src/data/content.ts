export interface Destination {
  name: string;
  bestFor: string;
  dayCount: string;
  bestTime: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    name: "Beijing",

    bestFor: "History + Great Wall",
    dayCount: "3–5 days",
    bestTime: "Apr–May, Sep–Oct",

    image: "/images/destinations/beijing.webp",






  },
  {
    name: "Shanghai",

    bestFor: "City + Disney",
    dayCount: "2–4 days",
    bestTime: "Mar–May, Oct–Nov",

    image: "/images/destinations/shanghai.webp",






  },
  {
    name: "Xi'an",

    bestFor: "Terracotta Warriors",
    dayCount: "2–3 days",
    bestTime: "Mar–May, Sep–Nov",

    image: "/images/destinations/xian.webp",






  },
  {
    name: "Chengdu",

    bestFor: "Pandas + food culture",
    dayCount: "3–4 days",
    bestTime: "Mar–Jun, Sep–Nov",

    image: "/images/destinations/chengdu.webp",






  },
  {
    name: "Zhangjiajie",

    bestFor: "Nature + adventure",
    dayCount: "2–4 days",
    bestTime: "Apr–May, Sep–Oct",

    image: "/images/destinations/zhangjiajie.webp",






  },
  {
    name: "Guilin & Yangshuo",

    bestFor: "Karst scenery + cycling",
    dayCount: "3–4 days",
    bestTime: "Apr–Oct",

    image: "/images/destinations/guilin.webp",






  },
  {
    name: "Yunnan",

    bestFor: "Culture + diverse scenery",
    dayCount: "5–7 days",
    bestTime: "Mar–Jun, Sep–Nov",

    image: "/images/destinations/yunnan.webp",






  },
  {
    name: "Guangzhou",

    bestFor: "Cantonese food + trade hub",
    dayCount: "2–3 days",
    bestTime: "Oct–Dec",

    image: "/images/destinations/guangzhou.webp",






  },
];


export interface FAQItem { question: string; answer: string; }
export const faqs: FAQItem[] = [
  { question: "How many days do I need for a China trip?", answer: "For a first trip, 10–14 days is ideal. This lets you cover 3–4 cities at a comfortable pace. A 7-day trip works for a quick Beijing-only visit. For a comprehensive experience across 5+ cities, plan 21 days." },
  { question: "What is the best China itinerary for first-time visitors?", answer: "The classic Golden Triangle — Beijing (Great Wall, Forbidden City), Xi'an (Terracotta Warriors), Shanghai (modern skyline, Disney) — is perfect for first-timers. It offers history, culture, and modern China in one trip." },
  { question: "Is China safe for tourists?", answer: "China is one of the safest countries for travelers. Violent crime against tourists is extremely rare. Major cities are well-lit at night with heavy police presence. Common precautions like watching your belongings in crowded areas are sufficient." },
  { question: "How much does a trip to China cost?", answer: "Budget travelers can manage $50–100/day (hostels, local food, public transport). Mid-range travelers spend $100–200/day (3-4 star hotels, nice restaurants, Didi). Luxury travel runs $250+/day (5-star hotels, private guides, fine dining)." },
  { question: "Do I need a visa to visit China?", answer: "Most nationalities require a tourist visa (L visa) before arrival. However, China has greatly expanded visa-free access — travelers from 55 countries can stay up to 240 hours (10 days) when transiting, and citizens of 40+ countries can enter visa-free for up to 30 days. Check the <a href='https://www.travelchina.org.cn' target='_blank' rel='noopener'>official China travel portal</a> for your country's requirements." },
  { question: "Can I use Alipay or WeChat Pay as a foreigner?", answer: "Yes! Both Alipay and WeChat Pay now support foreign credit cards. Download the app, verify your passport, and link your Visa/Mastercard before your trip. Cash is rarely used in China — mobile payment is essential." },
  { question: "Can I use credit cards in China?", answer: "International credit cards work at major hotels, upscale restaurants, and large shopping malls. However, many smaller shops, street vendors, and local restaurants only accept Alipay or WeChat Pay. Set up at least one mobile payment app before traveling." },
  { question: "Is China easy to travel around?", answer: "China has the world's largest high-speed rail network, connecting all major cities efficiently. Trains run on time, stations are well-organized, and English signage is common in major hubs. Domestic flights connect farther destinations. Traveling between cities is easier than most first-timers expect." },
  { question: "What is the best time to visit China?", answer: "Spring (April–May) and autumn (September–October) offer the best weather — mild temperatures, less rain, and clear skies. Avoid Chinese New Year (late January/February) when transport is chaotic, and summer (June–August) which is hot and crowded." },
  { question: "Can I travel independently in China?", answer: "Absolutely. Independent travel in China is easier than ever with translation apps, English-friendly booking platforms (Trip.com), and universal mobile payment. You don't need a tour group unless you prefer the convenience." },
  { question: "What is China's 240-hour visa-free transit?", answer: "Travelers from 55 countries can stay in China for up to 240 hours (10 days) without a visa when transiting through one of 60+ designated ports, as long as you hold an onward ticket to a third country. You must stay within the permitted region and cannot extend the stay. It is not the same as the 30-day unilateral visa-free entry, which has no third-country requirement." },
  { question: "Can I enter China without a visa in 2026?", answer: "Yes, if you qualify for one of three routes: the 240-hour transit exemption, unilateral visa-free entry (currently 40+ countries, up to 30 days), or a standard tourist L visa applied for in advance. Check your nationality against the official China National Immigration Administration list before booking — the rules changed several times during 2025–2026." },
  { question: "Do I need a VPN in China?", answer: "Yes, if you want to use Google, Gmail, WhatsApp, Instagram or most Western apps. Install and test your VPN before you land — the Apple App Store and Google Play are not reliably accessible from inside China. A travel eSIM or international roaming plan often routes traffic outside the mainland and works without a separate VPN." },
  { question: "What is a good 7-day China itinerary?", answer: "With 7 days, pick one region and go deep rather than three cities shallow. The most reliable option is Beijing (4 days: Great Wall, Forbidden City, hutongs, Temple of Heaven) plus Xi'an (3 days: Terracotta Warriors, city wall, Muslim Quarter), linked by a 4.5-hour high-speed train. Adding Shanghai turns it into a 10-day trip." },
  { question: "Is 10 days enough for China?", answer: "Ten days comfortably covers the classic Golden Triangle: Beijing (4 days), Xi'an (2 days) and Shanghai (3–4 days), with one travel day. That pace gives you imperial history, the Terracotta Warriors and modern China without spending most of the trip on trains. First-time visitors rarely regret choosing 10 days over a rushed 7." },
];

export interface TripType { slug: string; name: string; description: string; idealDays: string; topDestinations: string[]; }
export const tripTypes: TripType[] = [
  { slug: "family", name: "Family Trips", description: "Kid-friendly adventure with panda encounters, theme parks, and safe, walkable cities.", idealDays: "10–14 days", topDestinations: ["Beijing", "Shanghai", "Chengdu", "Guilin"] },
  { slug: "solo", name: "Solo Trips", description: "Explore China at your own pace — hostels are social, cities are safe, high-speed rail makes it easy.", idealDays: "7–21 days", topDestinations: ["Beijing", "Xi'an", "Chengdu", "Yunnan"] },
  { slug: "couples", name: "Couples Trips", description: "Romantic river cruises, sunset on the Great Wall, candlelit dinners in historic neighborhoods.", idealDays: "10–14 days", topDestinations: ["Shanghai", "Guilin", "Yunnan", "Zhangjiajie"] },
  { slug: "luxury", name: "Luxury Trips", description: "5-star hotels, private guides, first-class high-speed rail, exclusive dining experiences.", idealDays: "10–14 days", topDestinations: ["Beijing", "Shanghai", "Chengdu", "Yunnan"] },
  { slug: "budget", name: "Budget Trips", description: "Smart spending for seeing China on $50–80/day, from hostels to street food and local trains.", idealDays: "7–21 days", topDestinations: ["Beijing", "Xi'an", "Chengdu", "Guangzhou"] },
  { slug: "first-time", name: "First-Time China", description: "Everything for a smooth first trip: visas, payment apps, SIM cards, and culture tips.", idealDays: "10–14 days", topDestinations: ["Beijing", "Xi'an", "Shanghai"] },
];

export interface Route { name: string; description: string; cities: string; }
export const routes: Route[] = [
  { name: "Classic China", description: "The essential first-timer route", cities: "Beijing → Xi'an → Shanghai" },
  { name: "China + Pandas", description: "Add Chengdu for the panda experience", cities: "Beijing → Xi'an → Chengdu" },
  { name: "China Nature", description: "Mountains, rivers, and karst peaks", cities: "Shanghai → Guilin → Zhangjiajie" },
  { name: "China Highlights", description: "The ultimate comprehensive journey", cities: "Beijing → Xi'an → Chengdu → Shanghai" },
  { name: "China + Yunnan", description: "Add southwestern culture and scenery", cities: "Shanghai → Lijiang → Dali → Shangri-La" },
];

// ============ NEW: Visa Data ============
