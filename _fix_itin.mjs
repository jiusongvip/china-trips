import { readFileSync, writeFileSync } from "fs";

const content = readFileSync("D:/workspaces/website/china-trips/src/data/content.ts", "utf8");

// Insert itinerary data before "export interface FAQItem"
const itinData = `
export interface Itinerary {
  name: string;
  days: number;
  route: string;
  highlights: string;
  dayPlan: { day: number; title: string; city: string; activities: { label: string; detail: string }[]; stay: string; transport: string; food: string }[];
}

export const itineraries: Itinerary[] = [
  {
    name: "7-Day Beijing Classic",
    days: 7,
    route: "Beijing (4) → Great Wall day trip → Beijing departure",
    highlights: "Forbidden City, Temple of Heaven, Mutianyu Great Wall, Hutong tour, Peking Duck dinner",
    dayPlan: [
      { day: 1, title: "Arrival and Orientation", city: "Beijing", activities: [{ label: "PM", detail: "Arrive Beijing, check in to hotel in Dongcheng District — evening walk at Wangfujing pedestrian street" }], stay: "Dongcheng District", transport: "Airport Express train (25 RMB) to Dongzhimen, then taxi (20 RMB)", food: "Noodle shop near Wangfujing (30 RMB)" },
      { day: 2, title: "Imperial Beijing", city: "Beijing", activities: [{ label: "AM", detail: "Tiananmen Square — Forbidden City (3h, 60 RMB) — enter through Meridian Gate, exit through Gate of Divine Prowess" }, { label: "PM", detail: "Jingshan Park for panoramic Forbidden City view — dinner at Siji Minfu for Peking Duck (120 RMB/person)" }], stay: "Dongcheng District", transport: "Metro Line 1 to Tiananmen East (4 RMB)", food: "Siji Minfu Peking Duck (120 RMB/person)" },
      { day: 3, title: "Great Wall Day", city: "Beijing", activities: [{ label: "Full Day", detail: "Mutianyu Great Wall (45 RMB park + 120 RMB cable car round-trip) - cable car up, toboggan slide down - evening at Guijie food street" }], stay: "Dongcheng District", transport: "Private car to Mutianyu (400 RMB round-trip) or group bus (80 RMB)", food: "Lunch near Great Wall (50 RMB), Guijie dinner (80 RMB)" },
      { day: 4, title: "Temples and Hutongs", city: "Beijing", activities: [{ label: "AM", detail: "Temple of Heaven (2h, 35 RMB) — see locals doing tai chi and calligraphy in the park" }, { label: "PM", detail: "Nanluoguxiang Hutong walk — Houhai Lake — Drum and Bell Towers" }], stay: "Dongcheng District", transport: "Metro Line 5 to Tiantan Dongmen (4 RMB)", food: "Dadong Roast Duck (180 RMB/person) — modern presentation" },
      { day: 5, title: "Summer Palace and Art", city: "Beijing", activities: [{ label: "AM", detail: "Summer Palace (3h, 30 RMB) — boat ride on Kunming Lake, Long Corridor walk" }, { label: "PM", detail: "798 Art District — galleries, cafes, craft beer" }], stay: "Dongcheng District", transport: "Metro Line 4 to Beigongmen (5 RMB)", food: "Lunch near Summer Palace (50 RMB), 798 cafe dinner (80 RMB)" },
      { day: 6, title: "Day Trip Options", city: "Beijing", activities: [{ label: "Full Day", detail: "Option A: Gubei Water Town + Simatai Great Wall (2h drive, 140 RMB). Option B: Lama Temple (25 RMB) + Confucius Temple — Panjiayuan antique market" }], stay: "Dongcheng District", transport: "Gubei: tour bus (180 RMB) or private car (500 RMB)", food: "Lunch near site (60 RMB), city dinner (80 RMB)" },
      { day: 7, title: "Departure", city: "Beijing", activities: [{ label: "AM", detail: "Last souvenir shopping — Beijing Zoo pandas (optional) — head to airport" }], stay: "—", transport: "Airport Express (25 RMB) or taxi (120 RMB)", food: "Breakfast at hotel" },
    ]
  },
  {
    name: "10-Day Golden Triangle",
    days: 10,
    route: "Beijing (4) → Xi'an (2) → Shanghai (3) → Departure",
    highlights: "Great Wall, Terracotta Warriors, The Bund, Shanghai Disney, high-speed rail experience",
    dayPlan: [
      { day: 1, title: "Arrive Beijing", city: "Beijing", activities: [{ label: "PM", detail: "Arrive Beijing — check in Dongcheng — evening Houhai Lake stroll" }], stay: "Dongcheng District", transport: "Airport Express + taxi (45 RMB)", food: "Local dumpling shop (40 RMB)" },
      { day: 2, title: "Forbidden City", city: "Beijing", activities: [{ label: "Full Day", detail: "Tiananmen Square — Forbidden City (3h, 60 RMB) — Jingshan Park — Peking Duck at Siji Minfu" }], stay: "Dongcheng District", transport: "Metro (4 RMB)", food: "Siji Minfu (120 RMB/person)" },
      { day: 3, title: "Great Wall", city: "Beijing", activities: [{ label: "Full Day", detail: "Mutianyu Great Wall (45 RMB + 120 RMB cable car) — cable car up, toboggan down" }], stay: "Dongcheng District", transport: "Group bus (80 RMB) or private car (400 RMB)", food: "Lunch near wall (50 RMB), city dinner (80 RMB)" },
      { day: 4, title: "Beijing to Xi'an", city: "Beijing — Xi'an", activities: [{ label: "AM", detail: "Temple of Heaven (35 RMB)" }, { label: "PM", detail: "High-speed rail to Xi'an (4.5h, 515 RMB) — check in near South Gate — Muslim Quarter evening" }], stay: "Xi'an, inside City Wall", transport: "High-speed rail (515 RMB)", food: "Muslim Quarter food crawl (80 RMB)" },
      { day: 5, title: "Terracotta Warriors", city: "Xi'an", activities: [{ label: "Full Day", detail: "Terracotta Army Museum (3h, 120 RMB) — Huaqing Palace — Muslim Quarter dinner — Bell Tower at night" }], stay: "Xi'an", transport: "Bus 306 (7 RMB) or taxi (150 RMB round-trip)", food: "Tongshengxiang lamb soup (60 RMB), street food (60 RMB)" },
      { day: 6, title: "City Wall and Fly Out", city: "Xi'an — Shanghai", activities: [{ label: "AM", detail: "Bike the Ancient City Wall (14km, 54 RMB) — Shaanxi History Museum" }, { label: "PM", detail: "Fly to Shanghai (2.5h, 500-800 RMB) — Bund evening walk" }], stay: "Shanghai, Jing'an", transport: "Flight (500-800 RMB)", food: "Lunch at Yongxing Fang (50 RMB), Shanghai dinner (100 RMB)" },
      { day: 7, title: "The Bund and Pudong", city: "Shanghai", activities: [{ label: "Full Day", detail: "Bund walk — ferry to Pudong (2 RMB) — Shanghai Tower (180 RMB) — Nanjing Road — Huangpu River night cruise" }], stay: "Shanghai", transport: "Metro (5-9 RMB)", food: "Jia Jia Tang Bao soup dumplings (50 RMB), dinner (120 RMB)" },
      { day: 8, title: "Old Shanghai", city: "Shanghai", activities: [{ label: "Full Day", detail: "Yu Garden (40 RMB) — Yuyuan Bazaar — French Concession walk — Tianzifang — Xintiandi dinner" }], stay: "Shanghai", transport: "Metro (4-6 RMB)", food: "Lunch at Yuyuan (60 RMB), Xintiandi dinner (150 RMB)" },
      { day: 9, title: "Disney or Water Town", city: "Shanghai", activities: [{ label: "Full Day", detail: "Option A: Shanghai Disney Resort (475+ RMB, full day + fireworks). Option B: Zhujiajiao Water Town (30 RMB) — canal boats, ancient bridges, Ming-Qing architecture" }], stay: "Shanghai", transport: "Metro Line 11 or bus to Zhujiajiao (12 RMB)", food: "Park food (100 RMB) or water town lunch (60 RMB)" },
      { day: 10, title: "Departure", city: "Shanghai", activities: [{ label: "AM", detail: "Last shopping — head to Pudong Airport" }], stay: "—", transport: "Maglev (50 RMB) or metro (5 RMB)", food: "Breakfast at hotel" },
    ]
  },
  {
    name: "14-Day Classic and Pandas",
    days: 14,
    route: "Beijing (3) → Xi'an (2) → Chengdu (2) → Guilin (2) → Shanghai (3)",
    highlights: "Forbidden City, Terracotta Warriors, Panda Base, Li River cruise, Shanghai skyline",
    dayPlan: [
      { day: 1, title: "Arrive Beijing", city: "Beijing", activities: [{ label: "PM", detail: "Arrive Beijing — check in — Wangfujing evening walk" }], stay: "Dongcheng", transport: "Airport Express (25 RMB) + taxi (20 RMB)", food: "Noodle shop (30 RMB)" },
      { day: 2, title: "Forbidden City", city: "Beijing", activities: [{ label: "Full Day", detail: "Tiananmen — Forbidden City (60 RMB) — Jingshan Park — Peking Duck dinner" }], stay: "Dongcheng", transport: "Metro (4 RMB)", food: "Siji Minfu (120 RMB/person)" },
      { day: 3, title: "Great Wall", city: "Beijing", activities: [{ label: "Full Day", detail: "Mutianyu Great Wall (45 + 120 RMB cable car) — toboggan down — Guijie evening" }], stay: "Dongcheng", transport: "Group bus (80 RMB) or private car (400 RMB)", food: "Lunch (50 RMB), Guijie (80 RMB)" },
      { day: 4, title: "Beijing to Xi'an", city: "Beijing — Xi'an", activities: [{ label: "AM", detail: "Temple of Heaven (35 RMB)" }, { label: "PM", detail: "High-speed rail to Xi'an (4.5h, 515 RMB) — Bell Tower at night" }], stay: "Xi'an, inside City Wall", transport: "High-speed rail (515 RMB)", food: "Muslim Quarter (80 RMB)" },
      { day: 5, title: "Terracotta Warriors", city: "Xi'an", activities: [{ label: "Full Day", detail: "Terracotta Army (120 RMB) — City Wall bike (54 RMB) — Giant Wild Goose Pagoda evening" }], stay: "Xi'an", transport: "Bus 306 (7 RMB)", food: "Tongshengxiang (60 RMB), street food (60 RMB)" },
      { day: 6, title: "Xi'an to Chengdu", city: "Xi'an — Chengdu", activities: [{ label: "AM", detail: "Shaanxi History Museum" }, { label: "PM", detail: "High-speed rail to Chengdu (3h, 263 RMB) — Jinli Ancient Street" }], stay: "Chengdu, near Taikoo Li", transport: "High-speed rail (263 RMB)", food: "Jinli street food (60 RMB)" },
      { day: 7, title: "Pandas!", city: "Chengdu", activities: [{ label: "Full Day", detail: "Chengdu Panda Base (7:30am, 55 RMB) — People's Park tea house — Kuanzhai Alley — Hot pot and Sichuan opera" }], stay: "Chengdu", transport: "Taxi to Panda Base (30 RMB)", food: "Shujiuxiang hot pot (100 RMB/person)" },
      { day: 8, title: "Chengdu to Guilin", city: "Chengdu — Guilin", activities: [{ label: "AM", detail: "Wuhou Shrine — last Sichuan lunch" }, { label: "PM", detail: "Flight to Guilin (1.5h, 600-900 RMB) — Sun and Moon Pagodas" }], stay: "Guilin center", transport: "Flight (600-900 RMB)", food: "Guilin rice noodles (15 RMB)" },
      { day: 9, title: "Li River Cruise", city: "Guilin — Yangshuo", activities: [{ label: "Full Day", detail: "Li River cruise to Yangshuo (4h, 360 RMB) — West Street — Impression Liu Sanjie show (198 RMB)" }], stay: "Yangshuo", transport: "Cruise (360 RMB)", food: "Beer fish dinner (80 RMB)" },
      { day: 10, title: "Yangshuo Adventures", city: "Yangshuo", activities: [{ label: "Full Day", detail: "Bike through Ten-Mile Gallery — Yulong River bamboo raft (200 RMB) — Moon Hill hike — farmhouse cooking class" }], stay: "Yangshuo", transport: "Bike rental (30 RMB)", food: "Farmhouse lunch (60 RMB)" },
      { day: 11, title: "Yangshuo to Shanghai", city: "Yangshuo — Shanghai", activities: [{ label: "AM", detail: "Morning cycling — bus to Guilin (1.5h)" }, { label: "PM", detail: "Flight to Shanghai (2.5h, 700-1000 RMB) — Bund evening" }], stay: "Shanghai, near Bund", transport: "Bus (25 RMB), flight (700-1000 RMB)", food: "Dinner near Bund (120 RMB)" },
      { day: 12, title: "Shanghai Icons", city: "Shanghai", activities: [{ label: "Full Day", detail: "Bund — Pudong — Shanghai Tower (180 RMB) — Yu Garden (40 RMB) — French Concession — Xintiandi" }], stay: "Shanghai", transport: "Metro (6-10 RMB)", food: "Jia Jia Tang Bao (50 RMB), Xintiandi (150 RMB)" },
      { day: 13, title: "Disney or Suzhou", city: "Shanghai", activities: [{ label: "Full Day", detail: "Shanghai Disney (475+ RMB) or Suzhou day trip — classical gardens, Pingjiang Road (25 min train, 40 RMB)" }], stay: "Shanghai", transport: "Metro Line 11 or high-speed rail to Suzhou (40 RMB)", food: "100-150 RMB" },
      { day: 14, title: "Departure", city: "Shanghai", activities: [{ label: "AM", detail: "Last shopping — head to Pudong Airport" }], stay: "—", transport: "Maglev (50 RMB)", food: "Breakfast" },
    ]
  },
  {
    name: "21-Day Grand China",
    days: 21,
    route: "Beijing (3) → Xi'an (2) → Chengdu (2) → Zhangjiajie (2) → Guilin (2) → Shanghai (3) + free days",
    highlights: "Six UNESCO sites, pandas, Avatar mountains, karst landscapes, modern Shanghai",
    dayPlan: [
      { day: 1, title: "Arrive Beijing", city: "Beijing", activities: [{ label: "PM", detail: "Arrive — check in Dongcheng — Wangfujing evening" }], stay: "Dongcheng", transport: "Airport Express (25 RMB)", food: "Local dinner (50 RMB)" },
      { day: 2, title: "Imperial Beijing", city: "Beijing", activities: [{ label: "Full Day", detail: "Tiananmen — Forbidden City (60 RMB) — Jingshan Park — Peking Duck" }], stay: "Dongcheng", transport: "Metro (4 RMB)", food: "Siji Minfu (120 RMB/person)" },
      { day: 3, title: "Great Wall", city: "Beijing", activities: [{ label: "Full Day", detail: "Mutianyu Great Wall — Summer Palace afternoon" }], stay: "Dongcheng", transport: "Private car (400 RMB)", food: "Great Wall lunch (50 RMB), dinner (80 RMB)" },
      { day: 4, title: "Beijing to Xi'an", city: "Beijing — Xi'an", activities: [{ label: "AM", detail: "Temple of Heaven (35 RMB) — Lama Temple (25 RMB)" }, { label: "PM", detail: "High-speed rail to Xi'an (4.5h) — Muslim Quarter" }], stay: "Xi'an", transport: "High-speed rail (515 RMB)", food: "Muslim Quarter (80 RMB)" },
      { day: 5, title: "Terracotta Warriors", city: "Xi'an", activities: [{ label: "Full Day", detail: "Terracotta Army (120 RMB) — City Wall bike (54 RMB) — Bell Tower" }], stay: "Xi'an", transport: "Bus 306 (7 RMB)", food: "Lamb soup (60 RMB), street food (60 RMB)" },
      { day: 6, title: "Xi'an to Chengdu", city: "Xi'an — Chengdu", activities: [{ label: "AM", detail: "Giant Wild Goose Pagoda" }, { label: "PM", detail: "High-speed rail to Chengdu (3h) — Jinli Ancient Street" }], stay: "Chengdu", transport: "High-speed rail (263 RMB)", food: "Jinli street food (60 RMB)" },
      { day: 7, title: "Pandas and Hot Pot", city: "Chengdu", activities: [{ label: "Full Day", detail: "Panda Base (7:30am, 55 RMB) — tea house — Kuanzhai Alley — hot pot and opera" }], stay: "Chengdu", transport: "Taxi (30 RMB)", food: "Shujiuxiang (100 RMB/person)" },
      { day: 8, title: "Leshan Buddha", city: "Chengdu", activities: [{ label: "Full Day", detail: "Leshan Giant Buddha day trip (80 RMB) — evening Sichuan food tour" }], stay: "Chengdu", transport: "High-speed rail to Leshan (54 RMB)", food: "Leshan lunch (50 RMB), dinner (80 RMB)" },
      { day: 9, title: "Fly to Zhangjiajie", city: "Chengdu — Zhangjiajie", activities: [{ label: "AM", detail: "People's Park morning — last Sichuan lunch" }, { label: "PM", detail: "Flight to Zhangjiajie — check in Wulingyuan" }], stay: "Wulingyuan", transport: "Flight (500-700 RMB)", food: "Tujia three-pot stew (60 RMB)" },
      { day: 10, title: "Avatar Mountains", city: "Zhangjiajie", activities: [{ label: "Full Day", detail: "National Forest Park (225 RMB) — Golden Whip Stream — Yuanjiajie — Bailong Elevator" }], stay: "Wulingyuan", transport: "Park shuttle included", food: "Park lunch (50 RMB), dinner (70 RMB)" },
      { day: 11, title: "Glass Bridge and Tianmen", city: "Zhangjiajie", activities: [{ label: "Full Day", detail: "Grand Canyon Glass Bridge (256 RMB) — Tianmen Mountain (258 RMB) — Heaven's Gate, 99 bends" }], stay: "Wulingyuan", transport: "Bus to Tianmen (20 RMB)", food: "Lunch (50 RMB), dinner (80 RMB)" },
      { day: 12, title: "Train to Guilin", city: "Zhangjiajie — Guilin", activities: [{ label: "AM", detail: "Baofeng Lake boat ride" }, { label: "PM", detail: "High-speed rail to Guilin via Changsha (6h)" }], stay: "Guilin", transport: "High-speed rail (400 RMB)", food: "Guilin rice noodles (15 RMB)" },
      { day: 13, title: "Li River to Yangshuo", city: "Guilin — Yangshuo", activities: [{ label: "Full Day", detail: "Li River cruise (4h, 360 RMB) — West Street — Impression Liu Sanjie" }], stay: "Yangshuo", transport: "Cruise (360 RMB)", food: "Beer fish (80 RMB)" },
      { day: 14, title: "Yangshuo Countryside", city: "Yangshuo", activities: [{ label: "Full Day", detail: "Bike Ten-Mile Gallery — Yulong River bamboo raft (200 RMB) — Moon Hill — cooking class" }], stay: "Yangshuo", transport: "Bike (30 RMB)", food: "Farmhouse lunch (60 RMB)" },
      { day: 15, title: "Longji Rice Terraces", city: "Guilin", activities: [{ label: "Full Day", detail: "Longji Rice Terraces day trip (80 RMB) — hike Ping'an to Dazhai" }], stay: "Guilin", transport: "Tour bus (120 RMB)", food: "Village lunch (50 RMB)" },
      { day: 16, title: "Fly to Shanghai", city: "Guilin — Shanghai", activities: [{ label: "AM", detail: "Elephant Trunk Hill — Reed Flute Cave" }, { label: "PM", detail: "Flight to Shanghai — Bund evening" }], stay: "Shanghai", transport: "Flight (600-900 RMB)", food: "Bund dinner (120 RMB)" },
      { day: 17, title: "Shanghai Icons", city: "Shanghai", activities: [{ label: "Full Day", detail: "Bund — Pudong — Shanghai Tower (180 RMB) — Nanjing Road — Huangpu River cruise" }], stay: "Shanghai", transport: "Metro (6-10 RMB)", food: "Soup dumplings (50 RMB), dinner (120 RMB)" },
      { day: 18, title: "Old Shanghai and Art", city: "Shanghai", activities: [{ label: "Full Day", detail: "Yu Garden (40 RMB) — French Concession — Tianzifang — M50 — Xintiandi" }], stay: "Shanghai", transport: "Metro (6-8 RMB)", food: "Lunch (60 RMB), Xintiandi (150 RMB)" },
      { day: 19, title: "Disney or Suzhou", city: "Shanghai", activities: [{ label: "Full Day", detail: "Shanghai Disney (475+ RMB) or Suzhou classical gardens day trip" }], stay: "Shanghai", transport: "Metro or train (40 RMB)", food: "100-150 RMB" },
      { day: 20, title: "Free Day in Shanghai", city: "Shanghai", activities: [{ label: "Full Day", detail: "Shanghai Museum — People's Park — Qibao Ancient Town — farewell dinner" }], stay: "Shanghai", transport: "Metro (5-8 RMB)", food: "Farewell dinner (200 RMB)" },
      { day: 21, title: "Departure", city: "Shanghai", activities: [{ label: "AM", detail: "Last shopping — head to Pudong Airport" }], stay: "—", transport: "Maglev (50 RMB)", food: "Breakfast" },
    ]
  },
];
`;

const result = content.replace(
  "export const itineraries: Itinerary[] = [\n\n];",
  itinData
);

writeFileSync("D:/workspaces/website/china-trips/src/data/content.ts", result, "utf8");
console.log(`Fixed itineraries: ${result.length} chars`);
