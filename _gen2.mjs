import { readFileSync, writeFileSync } from "fs";

let content = readFileSync("D:/workspaces/website/china-trips/src/data/content.ts", "utf8");

// Remove the stub tail (empty arrays + comment)
const stub = `];

export interface FAQItem { question: string; answer: string; }
export const faqs: FAQItem[] = [];
export interface TripType { slug: string; name: string; description: string; idealDays: string; topDestinations: string[]; }
export const tripTypes: TripType[] = [];
export interface Route { name: string; description: string; cities: string; }
export const routes: Route[] = [];

// Deep data below appended in next phase`;

content = content.replace(stub, "");

const tail = `
];

export interface FAQItem { question: string; answer: string; }
export const faqs: FAQItem[] = [
  { question: "How many days do I need for a China trip?", answer: "For a first trip, 10–14 days is ideal. This lets you cover 3–4 cities at a comfortable pace. A 7-day trip works for a quick Beijing-only visit. For a comprehensive experience across 5+ cities, plan 21 days." },
  { question: "What is the best China itinerary for first-time visitors?", answer: "The classic Golden Triangle — Beijing (Great Wall, Forbidden City), Xi'an (Terracotta Warriors), Shanghai (modern skyline, Disney) — is perfect for first-timers. It offers history, culture, and modern China in one trip." },
  { question: "Is China safe for tourists?", answer: "China is one of the safest countries for travelers. Violent crime against tourists is extremely rare. Major cities are well-lit at night with heavy police presence. Common precautions like watching your belongings in crowded areas are sufficient." },
  { question: "How much does a trip to China cost?", answer: "Budget travelers can manage $50–100/day (hostels, local food, public transport). Mid-range travelers spend $100–200/day (3-4 star hotels, nice restaurants, Didi). Luxury travel runs $250+/day (5-star hotels, private guides, fine dining)." },
  { question: "Do I need a visa to visit China?", answer: "Most nationalities require a tourist visa (L visa) before arrival. However, China has expanded its visa-free transit policy — travelers from 54 countries can stay up to 144 hours in certain cities without a visa. Check your specific country's requirements." },
  { question: "Can I use Alipay or WeChat Pay as a foreigner?", answer: "Yes! Both Alipay and WeChat Pay now support foreign credit cards. Download the app, verify your passport, and link your Visa/Mastercard before your trip. Cash is rarely used in China — mobile payment is essential." },
  { question: "Can I use credit cards in China?", answer: "International credit cards work at major hotels, upscale restaurants, and large shopping malls. However, many smaller shops, street vendors, and local restaurants only accept Alipay or WeChat Pay. Set up at least one mobile payment app before traveling." },
  { question: "Is China easy to travel around?", answer: "China has the world's largest high-speed rail network, connecting all major cities efficiently. Trains run on time, stations are well-organized, and English signage is common in major hubs. Domestic flights connect farther destinations. Traveling between cities is easier than most first-timers expect." },
  { question: "What is the best time to visit China?", answer: "Spring (April–May) and autumn (September–October) offer the best weather — mild temperatures, less rain, and clear skies. Avoid Chinese New Year (late January/February) when transport is chaotic, and summer (June–August) which is hot and crowded." },
  { question: "Can I travel independently in China?", answer: "Absolutely. Independent travel in China is easier than ever with translation apps, English-friendly booking platforms (Trip.com), and universal mobile payment. You don't need a tour group unless you prefer the convenience." },
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
export const visa144hCities = ["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Xi'an","Chongqing","Kunming","Xiamen","Qingdao","Wuhan","Hangzhou","Nanjing","Tianjin","Dalian","Shenyang","Guilin","Changsha","Harbin","Ningbo","Zhengzhou"];
export interface VisaPolicy { country: string; policy: string; detail: string; }
export const visaPolicyHighlights: VisaPolicy[] = [
  { country: "USA, UK, Canada, Australia, EU", policy: "L Visa required", detail: "Apply at Chinese embassy/consulate before travel. Single-entry 30-day tourist visa ~$140. Processing: 4–10 business days." },
  { country: "54 countries (transit)", policy: "144-hour visa-free", detail: "Must arrive/depart via eligible airports in select cities. Must have confirmed onward ticket to a third country/region. Cannot leave designated city/region." },
  { country: "Singapore, Japan, Brunei", policy: "15-day visa-free", detail: "Ordinary passport holders can enter China visa-free for up to 15 days for tourism or business." },
  { country: "France, Germany, Italy + others", policy: "15-day visa-free", detail: "Select EU countries now have 15-day visa-free access (policy expanding, check latest updates)." },
];

// ============ NEW: Weather Data ============
export interface MonthWeather { month: string; beijing: string; shanghai: string; chengdu: string; guilin: string; }
export const monthlyWeather: MonthWeather[] = [
  { month: "Jan", beijing: "−9/2°C · Dry", shanghai: "1/8°C · Damp", chengdu: "3/9°C · Overcast", guilin: "5/11°C · Cool" },
  { month: "Feb", beijing: "−6/5°C · Dry", shanghai: "2/10°C · Damp", chengdu: "5/12°C · Cloudy", guilin: "7/13°C · Cool" },
  { month: "Mar", beijing: "0/12°C · Dusty", shanghai: "6/15°C · Mild rain", chengdu: "9/17°C · Mild", guilin: "11/17°C · Rainy" },
  { month: "Apr", beijing: "8/21°C · Perfect", shanghai: "11/21°C · Pleasant", chengdu: "14/23°C · Best", guilin: "16/23°C · Humid" },
  { month: "May", beijing: "14/27°C · Warm", shanghai: "16/26°C · Warm", chengdu: "19/28°C · Warm", guilin: "20/28°C · Rainy" },
  { month: "Jun", beijing: "19/31°C · Hot", shanghai: "21/29°C · Plum rain", chengdu: "22/30°C · Rainy", guilin: "23/31°C · Wet" },
  { month: "Jul", beijing: "22/32°C · Humid", shanghai: "25/33°C · Hot", chengdu: "24/31°C · Humid", guilin: "25/33°C · Hot/wet" },
  { month: "Aug", beijing: "21/31°C · Humid", shanghai: "25/33°C · Typhoon", chengdu: "23/31°C · Humid", guilin: "25/33°C · Hot/wet" },
  { month: "Sep", beijing: "15/26°C · Perfect", shanghai: "21/29°C · Best", chengdu: "20/27°C · Best", guilin: "22/30°C · Good" },
  { month: "Oct", beijing: "7/20°C · Best", shanghai: "15/24°C · Perfect", chengdu: "15/22°C · Comfort", guilin: "17/26°C · Best" },
  { month: "Nov", beijing: "0/10°C · Chilly", shanghai: "9/18°C · Cool", chengdu: "10/16°C · Cool", guilin: "11/20°C · Mild" },
  { month: "Dec", beijing: "−6/3°C · Cold", shanghai: "3/11°C · Cold", chengdu: "5/11°C · Cool", guilin: "7/15°C · Cool" },
];

// ============ NEW: Language Tips ============
export interface Phrase { english: string; chinese: string; pinyin: string; context: string; }
export const essentialPhrases: Phrase[] = [
  { english: "Hello", chinese: "你好", pinyin: "Nǐ hǎo", context: "Universal greeting, any time of day" },
  { english: "Thank you", chinese: "谢谢", pinyin: "Xiè xie", context: "Use generously — appreciated everywhere" },
  { english: "How much?", chinese: "多少钱？", pinyin: "Duō shǎo qián?", context: "Shopping in markets. Point at item while asking" },
  { english: "Too expensive!", chinese: "太贵了！", pinyin: "Tài guì le!", context: "Essential for market bargaining. Say it with a smile" },
  { english: "I don't understand", chinese: "我听不懂", pinyin: "Wǒ tīng bù dǒng", context: "When someone speaks fast. Follow with translation app" },
  { english: "Where is the toilet?", chinese: "洗手间在哪里？", pinyin: "Xǐshǒujiān zài nǎlǐ?", context: "Most restaurants and malls have clean public toilets" },
  { english: "No spicy", chinese: "不要辣", pinyin: "Bú yào là", context: "Crucial in Sichuan. Show this on your phone if needed" },
  { english: "The bill, please", chinese: "买单", pinyin: "Mǎi dān", context: "At restaurants. Also works as hand gesture (writing in air)" },
  { english: "This one", chinese: "这个", pinyin: "Zhè ge", context: "Menu ordering: point at picture + say this" },
  { english: "Delicious!", chinese: "好吃！", pinyin: "Hǎo chī!", context: "Best compliment you can give. Chefs will beam" },
  { english: "I'm vegetarian", chinese: "我吃素", pinyin: "Wǒ chī sù", context: "Important: many dishes hide meat broth. Be explicit" },
  { english: "Take me here", chinese: "请带我去这里", pinyin: "Qǐng dài wǒ qù zhèlǐ", context: "Show taxi driver address in Chinese + say this" },
  { english: "Do you have WiFi?", chinese: "有WiFi吗？", pinyin: "Yǒu WiFi ma?", context: "Most cafés/hotels have free WiFi" },
  { english: "Can I pay with Alipay?", chinese: "可以用支付宝吗？", pinyin: "Kěyǐ yòng Zhīfùbǎo ma?", context: "99% will say yes, but always confirm at small stalls" },
  { english: "I need help", chinese: "我需要帮助", pinyin: "Wǒ xūyào bāngzhù", context: "For emergencies. Chinese people are very helpful to tourists" },
];

// ============ NEW: Transport Detail ============
export interface TransportMode { name: string; bestFor: string; tips: string; }
export const transportModes: TransportMode[] = [
  { name: "High-Speed Rail (高铁)", bestFor: "Intercity travel under 1,000km", tips: "Book on Trip.com or 12306.cn (Chinese only). G-trains fastest (300 km/h). Second class ~¥0.45/km. Book 2+ weeks ahead for holidays. Stations require passport + security check." },
  { name: "Domestic Flights", bestFor: "Crossing the country (1,500+ km)", tips: "Book on Trip.com. Major airlines: Air China, China Southern, China Eastern. Budget: Spring Airlines. Arrive 2h early. Delays common — build buffer." },
  { name: "Metro / Subway", bestFor: "City navigation", tips: "Every major city has one. ¥3–9 per ride. English signs/stops announced. Buy ticket at machines (English mode). Alipay transport QR works in most cities." },
  { name: "Didi (Ride-Hailing)", bestFor: "Door-to-door, luggage, late night", tips: "China's Uber. Download DiDi Great China (English interface). Link foreign card. Cheaper than taxis. Auto-translate messaging with driver." },
  { name: "Public Bus", bestFor: "Budget city travel", tips: "¥1–3 per ride. Scan Alipay transport code. Routes in Chinese — use map app. Bus #5 in Beijing passes major sites." },
  { name: "Bike Share (共享单车)", bestFor: "Short hops, neighborhoods", tips: "Meituan/Hellobike everywhere. Scan QR via Alipay mini-program. ¥1.5 per 30 min. Dedicated bike lanes in most cities." },
];

// ============ NEW: Food City Guide ============
export interface FoodCity { city: string; cityCN: string; signature: string; dishes: { name: string; description: string; where: string; whereCN: string }[]; }
export const foodCities: FoodCity[] = [
  { city: "Beijing", cityCN: "北京", signature: "Peking Duck & Imperial cuisine", dishes: [
    { name: "Peking Duck", description: "Crispy skin, tender meat, wrapped with hoisin, cucumber, spring onion", where: "Siji Minfu", whereCN: "四季民福" },
    { name: "Zhajiang Noodles", description: "Thick wheat noodles with fermented soybean paste, cucumber, pork", where: "Old Beijing Noodle King", whereCN: "老北京炸酱面大王" },
    { name: "Mongolian Hot Pot", description: "Copper pot with charcoal, thin-sliced mutton, sesame dip", where: "Donglaishun", whereCN: "东来顺" },
  ]},
  { city: "Shanghai", cityCN: "上海", signature: "Soup dumplings & sweet-savory", dishes: [
    { name: "Xiaolongbao", description: "Steamed soup dumplings filled with pork and hot broth", where: "Jia Jia Tang Bao", whereCN: "佳家汤包" },
    { name: "Shengjianbao", description: "Pan-fried pork buns with crispy bottom and juicy filling", where: "Da Hu Chun", whereCN: "大壶春" },
    { name: "Hairy Crab (Sep–Nov)", description: "Seasonal steamed mitten crab with ginger vinegar", where: "Cheng Long Hang", whereCN: "成隆行" },
  ]},
  { city: "Chengdu", cityCN: "成都", signature: "Sichuan — numbingly spicy", dishes: [
    { name: "Sichuan Hot Pot", description: "Fiery broth with Sichuan peppercorns, meats, tofu, vegetables", where: "Shujiuxiang", whereCN: "蜀九香" },
    { name: "Mapo Tofu", description: "Silken tofu in chili-bean paste with minced pork, numbing", where: "Chen Mapo Tofu", whereCN: "陈麻婆豆腐" },
    { name: "Dan Dan Noodles", description: "Noodles with chili oil, sesame paste, minced pork, scallions", where: "Street stalls", whereCN: "路边摊" },
  ]},
  { city: "Xi'an", cityCN: "西安", signature: "Noodles & Muslim street food", dishes: [
    { name: "Biangbiang Noodles", description: "Belt-wide hand-pulled noodles with chili oil, garlic", where: "Muslim Quarter", whereCN: "回民街" },
    { name: "Lamb Paomo", description: "Crumbled flatbread in rich lamb broth with vermicelli", where: "Tongshengxiang", whereCN: "同盛祥" },
    { name: "Roujiamo", description: "Braised pork belly in crispy flatbread — original Chinese burger", where: "Fan Ji", whereCN: "樊记" },
  ]},
  { city: "Guangzhou", cityCN: "广州", signature: "Dim sum capital of the world", dishes: [
    { name: "Har Gow (Shrimp Dumpling)", description: "Translucent wrapper, whole shrimp filling, delicate", where: "Panxi", whereCN: "泮溪酒家" },
    { name: "Siu Mai", description: "Open-top pork and shrimp dumpling, yellow wrapper", where: "Panxi", whereCN: "泮溪酒家" },
    { name: "White Cut Chicken", description: "Poached chicken at perfect temperature, ginger-scallion oil", where: "Wenji", whereCN: "文记壹心鸡" },
  ]},
  { city: "Guilin", cityCN: "桂林", signature: "Rice noodles & river fish", dishes: [
    { name: "Guilin Mifen", description: "Rice noodles in bone broth with pickled beans, peanuts, chili", where: "Chongshan", whereCN: "崇善米粉" },
    { name: "Beer Fish", description: "Yangshuo river fish braised in local beer with tomatoes", where: "West Street riverside", whereCN: "西街江边" },
  ]},
];

// ============ NEW: Payment Setup Step-by-Step ============
export interface AppSetupStep { step: number; title: string; detail: string; }
export const alipaySetup: AppSetupStep[] = [
  { step: 1, title: "Download before departure", detail: "Get Alipay from App Store / Google Play. Register with international phone number." },
  { step: 2, title: "Verify identity", detail: "Me → Settings → Account & Security → Identity Verification. Upload passport photo. Takes 1–24 hours." },
  { step: 3, title: "Add card", detail: "Me → Bank Cards → Add Card. Visa, Mastercard, Amex all supported. Small verification charge refunded." },
  { step: 4, title: "Test before arriving", detail: "Try a small purchase on Trip.com or Didi. Tour Pass is alternative if card linking fails." },
  { step: 5, title: "Pay in China", detail: "Two ways: (1) Scan merchant QR → enter amount → pay. (2) Show your QR → merchant scans it. Both work." },
];
export const wechatPaySetup: AppSetupStep[] = [
  { step: 1, title: "Download WeChat", detail: "Available on all app stores. Register with phone number. May need a friend to verify (scan QR)." },
  { step: 2, title: "Enable WeChat Pay", detail: "Me → Services → Wallet → Add Bank Card. Verify with passport photo." },
  { step: 3, title: "Pro tip", detail: "WeChat Pay verification is stricter than Alipay for foreigners. Start with Alipay — it's friendlier." },
];
`;

writeFileSync("D:/workspaces/website/china-trips/src/data/content.ts", content + tail, "utf8");
console.log(`Written ${content.length + tail.length} chars total`);
