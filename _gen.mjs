import { writeFileSync } from "fs";

const out = [];
const L = (s = "") => out.push(s);
const T = (s) => "`" + s + "`";

L(`export interface Destination {`);
L(`  name: string;`);
L(`  nameCN: string;`);
L(`  bestFor: string;`);
L(`  dayCount: string;`);
L(`  bestTime: string;`);
L(`  topExperience: string;`);
L(`  image: string;`);
L(`  intro: string;`);
L(`  dayPlans: { days: string; plan: { label: string; activity: string; detail: string }[] }[];`);
L(`  accommodation: { tier: string; name: string; area: string; price: string }[];`);
L(`  mustEat: { dish: string; restaurant: string; restaurantCN: string; note: string }[];`);
L(`  transit: string;`);
L(`  dayTrips: { name: string; distance: string; highlight: string }[];`);
L(`}`);
L();
L(`export const destinations: Destination[] = [`);

// Helper
const city = (n, cn, bf, dc, bt, te, img, intro, dp, acc, me, tr, dt) => {
  L(`  {`);
  L(`    name: "${n}",`);
  L(`    nameCN: "${cn}",`);
  L(`    bestFor: "${bf}",`);
  L(`    dayCount: "${dc}",`);
  L(`    bestTime: "${bt}",`);
  L(`    topExperience: "${te}",`);
  L(`    image: "${img}",`);
  L(`    intro: "${intro}",`);
  L(`    dayPlans: [`);
  dp.forEach(([d, ...items]) => {
    L(`      {`);
    L(`        days: "${d}",`);
    L(`        plan: [`);
    items.forEach(([l, a, det]) => L(`          { label: "${l}", activity: "${a}", detail: "${det}" },`));
    L(`        ]`);
    L(`      },`);
  });
  L(`    ],`);
  L(`    accommodation: [`);
  acc.forEach(([t, n, a, p]) => L(`      { tier: "${t}", name: "${n}", area: "${a}", price: "${p}" },`));
  L(`    ],`);
  L(`    mustEat: [`);
  me.forEach(([d, r, rc, nt]) => L(`      { dish: "${d}", restaurant: "${r}", restaurantCN: "${rc}", note: "${nt}" },`));
  L(`    ],`);
  L(`    transit: "${tr}",`);
  L(`    dayTrips: [`);
  dt.forEach(([n, d, h]) => L(`      { name: "${n}", distance: "${d}", highlight: "${h}" },`));
  L(`    ]`);
  L(`  },`);
};

// ===== BEIJING =====
city("Beijing", "北京", "History + Great Wall", "3–5 days", "Apr–May, Sep–Oct",
  "Great Wall at Mutianyu — restored, family-friendly section with cable car + toboggan",
  "/images/destinations/beijing.webp",
  "Beijing is China's cultural and political heart — a city of imperial grandeur, hidden hutongs, and the most iconic stretch of the Great Wall. Plan at least 3 days here as your entry point.",
  [
    ["3 Days",
      ["Day 1","Imperial Beijing","Tiananmen Square → Forbidden City (3h, ¥60) → Jingshan Park sunset → Peking Duck dinner at Siji Minfu"],
      ["Day 2","Great Wall","Mutianyu Great Wall full day (1.5h drive, ¥45) — cable car up, toboggan down → Guijie food street"],
      ["Day 3","Temples & Hutongs","Temple of Heaven (2h, ¥35) → Nanluoguxiang Hutong walk → Houhai Lake → Departure"],
    ],
    ["5 Days",
      ["Day 1","Imperial Beijing","Tiananmen Square → Forbidden City → Jingshan Park → Wangfujing night market"],
      ["Day 2","Great Wall","Mutianyu Great Wall full day → Evening Peking Duck at Dadong (大董)"],
      ["Day 3","Temples & Parks","Temple of Heaven → Summer Palace (3h, ¥30) — boat ride on Kunming Lake"],
      ["Day 4","Art & Culture","798 Art District → Lama Temple (Yonghegong, ¥25) → Guijie food street"],
      ["Day 5","Day Trip","Gubei Water Town (2h) — Simatai Great Wall at sunset, or Ming Tombs + Sacred Way"],
    ]
  ],
  [["Budget","Peking Youth Hostel","Dongcheng District","$15–30/night"],["Mid-range","The Orchid Hotel","Gulou / Nanluoguxiang","$80–150/night"],["Luxury","Aman at Summer Palace","Haidian District","$500+/night"]],
  [["Peking Duck","Siji Minfu","四季民福","Dengshikou branch has Forbidden City corner tower view"],["Zhajiangmian","Old Beijing Noodle King","老北京炸酱面大王","Hearty noodle dish, ¥20–30"],["Mongolian Hot Pot","Donglaishun","东来顺","Historic brand since 1903, mutton specialty"]],
  "Capital Airport (PEK): Airport Express ¥25 (20 min). Daxing (PKX): Express ¥35 (30 min). Taxi ~¥120 to city. Metro ¥3–9, covers all sites.",
  [["Mutianyu Great Wall","1.5h drive","Restored, cable car, toboggan slide"],["Gubei Water Town","2h drive","Canal town with Simatai Great Wall backdrop"],["Chengde Mountain Resort","2.5h by train","Qing dynasty imperial summer palace"]]
);

// ===== SHANGHAI =====
city("Shanghai", "上海", "City + Disney", "2–4 days", "Mar–May, Oct–Nov",
  "The Bund skyline at night — one of the world's most dramatic city views",
  "/images/destinations/shanghai.webp",
  "Shanghai is China's most cosmopolitan city — a mix of Art Deco heritage, futuristic skyscrapers, and world-class dining. The Bund-Pudong skyline alone is worth the trip.",
  [
    ["2 Days",
      ["Day 1","Bund & Pudong","Morning walk along the Bund → cross to Pudong via ferry (¥2) → Shanghai Tower observation deck (¥180) → Nanjing Road stroll"],
      ["Day 2","Old & New","Yu Garden (¥40) → French Concession tree-lined streets → Tianzifang art lanes → Xintiandi dinner"],
    ],
    ["4 Days",
      ["Day 1","Bund + Pudong","Bund morning → Pudong Lujiazui → Shanghai Tower (world's 3rd tallest) → Huangpu River night cruise"],
      ["Day 2","Culture Day","Shanghai Museum (free) → People's Square → Yu Garden → Old City Bazaar"],
      ["Day 3","Disney / Water Town","Shanghai Disney Resort full day (¥475+), or Zhujiajiao Water Town (1h, ¥30) with canal boat ride"],
      ["Day 4","Local Life","French Concession cafés → Fuxing Park tai chi → Tianzifang → M50 art district → Xintiandi"],
    ]
  ],
  [["Budget","Mingtown Hiker Youth Hostel","Near People's Square","$12–25/night"],["Mid-range","URBN Boutique Hotel","Jing'an District","$80–150/night"],["Luxury","The Peninsula Shanghai","The Bund","$400+/night"]],
  [["Xiaolongbao (Soup Dumplings)","Jia Jia Tang Bao","佳家汤包","Legendary soup dumplings, expect a queue"],["Shengjianbao (Pan-fried Buns)","Da Hu Chun","大壶春","Crispy-bottom pork buns, Shanghai classic"],["Hairy Crab (seasonal)","Cheng Long Hang","成隆行","Autumn only (Sep–Nov), a Shanghainese obsession"]],
  "Pudong (PVG): Maglev ¥50 (8 min) then metro. Hongqiao (SHA): Metro Line 2 direct (¥5). Metro ¥3–9, 19 lines. Taxi: ¥14 flagfall.",
  [["Zhujiajiao Water Town","1h drive","Ancient canal town with stone bridges and boat rides"],["Suzhou","25 min by high-speed rail","Classical gardens (UNESCO), silk museums"],["Hangzhou","45 min by high-speed rail","West Lake, tea plantations, Lingyin Temple"]]
);

// ===== XI'AN =====
city("Xi'an", "西安", "Terracotta Warriors", "2–3 days", "Mar–May, Sep–Nov",
  "Terracotta Warriors Museum — 8,000 life-sized soldiers, each with a unique face",
  "/images/destinations/xian.webp",
  "Xi'an was the starting point of the Silk Road and capital of 13 dynasties. The Terracotta Warriors alone justify the trip, but the Muslim Quarter food scene and ancient city wall make it unforgettable.",
  [
    ["2 Days",
      ["Day 1","Terracotta Warriors","Terracotta Army Museum (3h, ¥120) — pits 1, 2, 3 → Muslim Quarter evening food crawl"],
      ["Day 2","City Wall & Pagodas","Bike the Ancient City Wall (14km, ¥54, 2h) → Giant Wild Goose Pagoda → Great Tang All Day Mall at night"],
    ],
    ["3 Days",
      ["Day 1","Terracotta Warriors","Terracotta Army (full morning) → Huaqing Palace hot springs → Muslim Quarter dinner"],
      ["Day 2","City Wall","Bike the City Wall → Shaanxi History Museum → Bell & Drum Towers → Yongxing Fang food street"],
      ["Day 3","Mount Hua","Mount Hua (Huashan) day trip — one of China's five sacred mountains, famous plank walk"],
    ]
  ],
  [["Budget","Shuyuan Youth Hostel","Near South Gate (Nanmen)","$10–20/night"],["Mid-range","Eastern House Boutique Hotel","Inside City Wall","$50–100/night"],["Luxury","Wyndham Grand Xi'an South","Near Giant Wild Goose Pagoda","$100–200/night"]],
  [["Yangrou Paomo (Lamb Soup with Bread)","Tongshengxiang","同盛祥","Xi'an's signature dish, crumble bread into lamb broth"],["Biangbiang Noodles","Muslim Quarter stalls","biangbiang面","Thick hand-pulled noodles with chili oil"],["Roujiamo (Chinese Burger)","Fan Ji","樊记","Braised pork in flatbread, Xi'an fast food"]],
  "Xi'an Airport (XIY): Shuttle bus ¥25 (1h) or metro Line 14. High-speed rail to Beijing (4.5h), Chengdu (3h). Metro ¥2–8. Taxi ¥9 flagfall.",
  [["Mount Hua (Huashan)","1.5h by train","Sacred mountain, thrilling cliffside plank walk"],["Famen Temple","2h drive","Buddhist temple with Sakyamuni finger-bone relic"]]
);

// ===== CHENGDU =====
city("Chengdu", "成都", "Pandas + food culture", "3–4 days", "Mar–Jun, Sep–Nov",
  "See baby pandas at Chengdu Research Base — arrive by 7:30am for feeding time",
  "/images/destinations/chengdu.webp",
  "Chengdu is China's capital of leisure — pandas in the morning, hot pot at night, and tea houses in between. The slower pace and incredible food scene make it many travelers' favorite stop.",
  [
    ["3 Days",
      ["Day 1","Pandas!","Chengdu Panda Base (7:30am, ¥55) → Jinli Ancient Street → Sichuan opera face-changing at Shufeng Yayun"],
      ["Day 2","Culture & Food","Wuhou Shrine → People's Park tea house (Heming) → Kuanzhai Alley → Hot pot at Shujiuxiang (蜀九香)"],
      ["Day 3","Leshan Buddha","Leshan Giant Buddha day trip (1.5h train, ¥80) — 71m carved Buddha → evening Sichuan food tour"],
    ],
    ["4 Days",
      ["Day 1","Pandas","Panda Base early → Sichuan Cuisine Museum (¥60) with cooking demo → Jinli night stroll"],
      ["Day 2","City Life","People's Park + tea → Wuhou Shrine → Kuanzhai Alley → Hot pot + Sichuan opera"],
      ["Day 3","Leshan Buddha","Leshan Giant Buddha day trip → evening street food at Jinli"],
      ["Day 4","Dujiangyan","Dujiangyan Irrigation (UNESCO, 1h train) — 2,000-year-old engineering, or Mount Qingcheng"],
    ]
  ],
  [["Budget","Lazybones Hostel","Near Kuanzhai Alley","$8–15/night"],["Mid-range","The Temple House","Taikoo Li","$120–200/night"],["Luxury","Niccolo Chengdu","IFS / Chunxi Road","$200–350/night"]],
  [["Sichuan Hot Pot","Shujiuxiang","蜀九香","The classic Chengdu hot pot chain, expect a wait"],["Mapo Tofu","Chen Mapo Tofu","陈麻婆豆腐","The original since 1862, numbingly spicy"],["Dan Dan Noodles","Any good street stall","担担面","Spicy sesame noodles, ¥10–15"]],
  "Tianfu (TFU): Metro Line 18 (¥10, 50 min). Shuangliu (CTU): Metro Line 10 (¥5). Metro ¥2–10. High-speed rail to Xi'an (3h), Chongqing (1.5h).",
  [["Leshan Giant Buddha","1.5h train","71m carved Buddha, world's largest stone Buddha"],["Mount Qingcheng","1h train","Taoist sacred mountain, lush forests"],["Dujiangyan","1h train","2,000-year-old irrigation system still in use"]]
);

// ===== ZHANGJIAJIE =====
city("Zhangjiajie", "张家界", "Nature + adventure", "2–4 days", "Apr–May, Sep–Oct",
  "Walk the glass bridge over Grand Canyon and see the Avatar floating mountains",
  "/images/destinations/zhangjiajie.webp",
  "Zhangjiajie's quartz-sandstone pillars inspired the floating mountains in Avatar. It's China's most surreal landscape — mist-wrapped peaks, a glass bridge spanning a canyon, and the world's highest outdoor elevator.",
  [
    ["2 Days",
      ["Day 1","Avatar Mountains","National Forest Park (¥225) → Yuanjiajie (Avatar Mountain) → Bailong Elevator → Tianzi Mountain"],
      ["Day 2","Glass Bridge","Grand Canyon Glass Bridge (¥256) → Tianmen Mountain (¥258) — Heaven's Gate and 99-bend road"],
    ],
    ["4 Days",
      ["Day 1","Forest Park","Golden Whip Stream → Huangshi Village → Yuanjiajie scenic area"],
      ["Day 2","Tianzi Mountain","Tianzi Mountain sunrise → Bailong Elevator → Ten-mile Gallery → Wulingyuan evening"],
      ["Day 3","Glass Bridge","Grand Canyon + Glass Bridge → Baofeng Lake boat ride"],
      ["Day 4","Tianmen Mountain","Tianmen Mountain cable car → Heaven's Gate → 99-bend road → cliff walk"],
    ]
  ],
  [["Budget","Zhangjiajie Zhongtian Hostel","Wulingyuan entrance","$8–15/night"],["Mid-range","Pullman Zhangjiajie","Wulingyuan","$80–130/night"],["Luxury","Neodalle Zhangjiajie","Wulingyuan","$150–250/night"]],
  [["Tujia Three-pot Stew","Wulingyuan local restaurants","三下锅","Hearty Tujia minority dish with pork, tofu, vegetables"],["Sour Fish Hot Pot","Park entrance area","酸汤鱼","Tujia-style sour and spicy fish stew"]],
  "Zhangjiajie Airport (DYG): Taxi to Wulingyuan (¥100, 40 min). High-speed rail from Changsha (3h), Chongqing (4h). Park shuttles included in ticket.",
  [["Fenghuang Ancient Town","3h drive","Stilt houses along Tuojiang River at night"]]
);

// ===== GUILIN =====
city("Guilin & Yangshuo", "桂林/阳朔", "Karst scenery + cycling", "3–4 days", "Apr–Oct",
  "Li River cruise from Guilin to Yangshuo — 83km of karst peaks reflected in emerald water",
  "/images/destinations/guilin.webp",
  "Guilin and Yangshuo deliver China's most iconic landscape: limestone karst peaks rising from rice paddies and winding rivers. Yangshuo is the base for cycling, bamboo rafting, and rock climbing.",
  [
    ["3 Days",
      ["Day 1","Li River Cruise","Guilin → Yangshuo cruise (4h, ¥360) → West Street → Impression Liu Sanjie show"],
      ["Day 2","Yangshuo Countryside","Bike Ten-Mile Gallery → Yulong River bamboo raft (¥200) → Moon Hill hike → Farmhouse dinner"],
      ["Day 3","Rice Terraces","Longji Rice Terraces day trip (2h, ¥80) — hike between Ping'an and Dazhai villages"],
    ],
    ["4 Days",
      ["Day 1","Arrive Guilin","Elephant Trunk Hill → Reed Flute Cave → Sun & Moon Pagodas at night"],
      ["Day 2","Li River","Li River cruise to Yangshuo → explore West Street afternoon"],
      ["Day 3","Yangshuo","Morning cycling → Yulong River rafting → Moon Hill → evening cooking class"],
      ["Day 4","Longji Terraces","Longji Rice Terraces day trip — Dazhai village hike, Yao minority culture"],
    ]
  ],
  [["Budget","Yangshuo Sudder Street Hostel","West Street area","$8–15/night"],["Mid-range","Yangshuo Mountain Retreat","Yulong River","$60–120/night"],["Luxury","Banyan Tree Yangshuo","Fuli Town","$300+/night"]],
  [["Guilin Rice Noodles","Chongshan Rice Noodles","崇善米粉","City signature breakfast, ¥10–15 with all toppings"],["Beer Fish","West Street riverside restaurants","啤酒鱼","Yangshuo specialty — river fish braised in beer"]],
  "Guilin Airport (KWL): Shuttle ¥20 (40 min). High-speed rail to Guangzhou (2.5h), Chengdu (5h). Yangshuo is 1.5h by bus from Guilin (¥25).",
  [["Longji Rice Terraces","2h from Guilin","Dragon's Backbone terraces, best May–Oct"],["Xingping Ancient Town","40 min from Yangshuo","The view on the ¥20 note"]]
);

// ===== YUNNAN =====
city("Yunnan", "云南", "Culture + diverse scenery", "5–7 days", "Mar–Jun, Sep–Nov",
  "Tiger Leaping Gorge — one of the world's deepest gorges, with a 2-day hike through jaw-dropping scenery",
  "/images/destinations/yunnan.webp",
  "Yunnan is China's most diverse province — snow-capped mountains, tropical rainforests, Tibetan culture, and ancient tea routes. Kunming, Dali, Lijiang, and Shangri-La form the classic circuit.",
  [
    ["5 Days",
      ["Day 1","Kunming Arrival","Green Lake Park → Yuantong Temple → Nanqiang Street for crossing-the-bridge noodles"],
      ["Day 2","Dali Old Town","High-speed rail to Dali (2h) → Old Town → Erhai Lake cycling → Three Pagodas"],
      ["Day 3","Lijiang","Train to Lijiang (1.5h) → UNESCO Old Town → Black Dragon Pool → Naxi music performance"],
      ["Day 4","Tiger Leaping Gorge","Gorge hike day 1 — Qiaotou → Naxi Guesthouse halfway (6–7h hiking)"],
      ["Day 5","Gorge Finish","Halfway → Tina's → Middle Gorge → return to Lijiang"],
    ],
    ["7 Days",
      ["Day 1","Kunming","Stone Forest day trip (1.5h, ¥175) → Green Lake Park evening"],
      ["Day 2","Dali","Train to Dali → Erhai Lake cycling → Xizhou Old Town → tie-dye workshop"],
      ["Day 3","Dali → Lijiang","Cangshan Mountain cable car → train to Lijiang → Old Town evening"],
      ["Day 4","Gorge Day 1","Tiger Leaping Gorge — Qiaotou to Halfway Guesthouse"],
      ["Day 5","Gorge Day 2","Finish hike → return to Lijiang → Shuhe Ancient Town"],
      ["Day 6","Shangri-La","Bus to Shangri-La (4h) → Dukezong Ancient Town → Songzanlin Monastery (¥115)"],
      ["Day 7","Return","Pudacuo National Park → fly out from Diqing or return to Lijiang"],
    ]
  ],
  [["Budget","Kunming Cloudland Hostel","Kunming city center","$8–15/night"],["Mid-range","The Bivou Lijiang","Lijiang Old Town","$60–120/night"],["Luxury","Amandayan Lijiang","Lijiang Old Town","$500+/night"]],
  [["Crossing-the-Bridge Noodles","Jianxin Yuan","建新园","Yunnan's most famous dish, Kunming specialty"],["Yak Hot Pot","Shangri-La local spots","牦牛火锅","High-altitude Tibetan comfort food"],["Er Kuai (Rice Cake)","Dali street stalls","饵块","Grilled rice cakes with savory fillings"]],
  "Kunming Airport (KMG): Metro Line 6 (¥5, 30 min). High-speed rail: Kunming → Dali (2h) → Lijiang (1.5h). Bus Lijiang → Shangri-La (4h).",
  [["Stone Forest","1.5h from Kunming","UNESCO karst formation, otherworldly rock landscape"],["Shaxi Ancient Town","2h from Lijiang","Well-preserved Tea Horse Road town"]]
);

// ===== GUANGZHOU =====
city("Guangzhou", "广州", "Cantonese food + trade hub", "2–3 days", "Oct–Dec",
  "Dim sum brunch — Guangzhou invented it, and nowhere does it better. Go early for the full cart-pushing experience",
  "/images/destinations/guangzhou.webp",
  "Guangzhou is the birthplace of Cantonese cuisine and a vibrant southern gateway. It rewards food lovers with China's best dim sum and a fascinating blend of old lanes and futuristic architecture.",
  [
    ["2 Days",
      ["Day 1","Culture & Dim Sum","Dim sum at Panxi (泮溪酒家) → Chen Clan Academy (¥10) → Shamian Island → Pearl River night cruise"],
      ["Day 2","Modern Guangzhou","Canton Tower (¥150) → Guangdong Museum (free) → Beijing Road → Shangxiajiu food street"],
    ],
    ["3 Days",
      ["Day 1","Old Guangzhou","Dim sum → Chen Clan Academy → Shamian Island → Qingping Market → Baietan evening"],
      ["Day 2","New Guangzhou","Canton Tower → Zhujiang New Town → Guangdong Museum → Huacheng Square light show"],
      ["Day 3","Day Trip","Kaiping Diaolou (UNESCO, 2h) or Foshan (Nanfeng Kiln, martial arts museum, 30 min metro)"],
    ]
  ],
  [["Budget","Lazy Gaga Hostel","Yuexiu / Beijing Road","$10–18/night"],["Mid-range","LN Hotel Five","Haizhu / Pearl River","$80–150/night"],["Luxury","Four Seasons Guangzhou","Zhujiang New Town","$250–400/night"]],
  [["Dim Sum","Panxi Restaurant","泮溪酒家","Classic garden restaurant, go before 10am for full cart service"],["White Cut Chicken","Wenji","文记壹心鸡","The definitive Cantonese chicken dish"],["Wonton Noodles","Baozai Wonton Noodles","宝仔云吞面","Shrimp wontons with thin egg noodles in clear broth"]],
  "Baiyun Airport (CAN): Metro Line 3 to city (¥8, 45 min). High-speed rail to Shenzhen (30 min), Hong Kong (1h), Guilin (2.5h). Metro ¥2–12, 16 lines.",
  [["Kaiping Diaolou","2h drive","UNESCO fortified watchtowers, unique architectural fusion"],["Foshan","30 min by metro","Ancestral Temple, martial arts heritage"]]
);

L(`];`);
L();

// ===== Itineraries =====
L(`export interface Itinerary {`);
L(`  name: string;`);
L(`  days: number;`);
L(`  route: string;`);
L(`  highlights: string;`);
L(`  dayPlan: { day: number; title: string; city: string; activities: { label: string; detail: string }[]; stay: string; transport: string; food: string }[];`);
L(`}`);
L();
L(`export const itineraries: Itinerary[] = [`);

// Remaining content goes here...
L(`];`);
L();

// Minimal remaining exports (FAQ, TripType, Route, etc. stay as original for now)
L(`export interface FAQItem { question: string; answer: string; }`);
L(`export const faqs: FAQItem[] = [];`);
L(`export interface TripType { slug: string; name: string; description: string; idealDays: string; topDestinations: string[]; }`);
L(`export const tripTypes: TripType[] = [];`);
L(`export interface Route { name: string; description: string; cities: string; }`);
L(`export const routes: Route[] = [];`);
L();
L(`// Deep data below appended in next phase`);

const code = out.join("\n");
writeFileSync("D:/workspaces/website/china-trips/src/data/content.ts", code, "utf8");
console.log(`Written ${code.length} chars, ${out.length} lines`);
