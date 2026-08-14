export interface Destination {
  name: string;
  nameCN: string;
  bestFor: string;
  dayCount: string;
  bestTime: string;
  topExperience: string;
  image: string;
  intro: string;
  dayPlans: { days: string; plan: { label: string; activity: string; detail: string }[] }[];
  accommodation: { tier: string; name: string; area: string; price: string }[];
  mustEat: { dish: string; restaurant: string; restaurantCN: string; note: string }[];
  transit: string;
  dayTrips: { name: string; distance: string; highlight: string }[];
}

export const destinations: Destination[] = [
  {
    name: "Beijing",
    nameCN: "北京",
    bestFor: "History + Great Wall",
    dayCount: "3–5 days",
    bestTime: "Apr–May, Sep–Oct",
    topExperience: "Great Wall at Mutianyu — restored, family-friendly section with cable car + toboggan",
    image: "/images/destinations/beijing.webp",
    intro: "Beijing is China's cultural and political heart — a city of imperial grandeur, hidden hutongs, and the most iconic stretch of the Great Wall. Plan at least 3 days here as your entry point.",
    dayPlans: [
      {
        days: "3 Days",
        plan: [
          { label: "Day 1", activity: "Imperial Beijing", detail: "Tiananmen Square → Forbidden City (3h, ¥60) → Jingshan Park sunset → Peking Duck dinner at Siji Minfu" },
          { label: "Day 2", activity: "Great Wall", detail: "Mutianyu Great Wall full day (1.5h drive, ¥45) — cable car up, toboggan down → Guijie food street" },
          { label: "Day 3", activity: "Temples & Hutongs", detail: "Temple of Heaven (2h, ¥35) → Nanluoguxiang Hutong walk → Houhai Lake → Departure" },
        ]
      },
      {
        days: "5 Days",
        plan: [
          { label: "Day 1", activity: "Imperial Beijing", detail: "Tiananmen Square → Forbidden City → Jingshan Park → Wangfujing night market" },
          { label: "Day 2", activity: "Great Wall", detail: "Mutianyu Great Wall full day → Evening Peking Duck at Dadong (大董)" },
          { label: "Day 3", activity: "Temples & Parks", detail: "Temple of Heaven → Summer Palace (3h, ¥30) — boat ride on Kunming Lake" },
          { label: "Day 4", activity: "Art & Culture", detail: "798 Art District → Lama Temple (Yonghegong, ¥25) → Guijie food street" },
          { label: "Day 5", activity: "Day Trip", detail: "Gubei Water Town (2h) — Simatai Great Wall at sunset, or Ming Tombs + Sacred Way" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Peking Youth Hostel", area: "Dongcheng District", price: "$15–30/night" },
      { tier: "Mid-range", name: "The Orchid Hotel", area: "Gulou / Nanluoguxiang", price: "$80–150/night" },
      { tier: "Luxury", name: "Aman at Summer Palace", area: "Haidian District", price: "$500+/night" },
    ],
    mustEat: [
      { dish: "Peking Duck", restaurant: "Siji Minfu", restaurantCN: "四季民福", note: "Dengshikou branch has Forbidden City corner tower view" },
      { dish: "Zhajiangmian", restaurant: "Old Beijing Noodle King", restaurantCN: "老北京炸酱面大王", note: "Hearty noodle dish, ¥20–30" },
      { dish: "Mongolian Hot Pot", restaurant: "Donglaishun", restaurantCN: "东来顺", note: "Historic brand since 1903, mutton specialty" },
    ],
    transit: "Capital Airport (PEK): Airport Express ¥25 (20 min). Daxing (PKX): Express ¥35 (30 min). Taxi ~¥120 to city. Metro ¥3–9, covers all sites.",
    dayTrips: [
      { name: "Mutianyu Great Wall", distance: "1.5h drive", highlight: "Restored, cable car, toboggan slide" },
      { name: "Gubei Water Town", distance: "2h drive", highlight: "Canal town with Simatai Great Wall backdrop" },
      { name: "Chengde Mountain Resort", distance: "2.5h by train", highlight: "Qing dynasty imperial summer palace" },
    ]
  },
  {
    name: "Shanghai",
    nameCN: "上海",
    bestFor: "City + Disney",
    dayCount: "2–4 days",
    bestTime: "Mar–May, Oct–Nov",
    topExperience: "The Bund skyline at night — one of the world's most dramatic city views",
    image: "/images/destinations/shanghai.webp",
    intro: "Shanghai is China's most cosmopolitan city — a mix of Art Deco heritage, futuristic skyscrapers, and world-class dining. The Bund-Pudong skyline alone is worth the trip.",
    dayPlans: [
      {
        days: "2 Days",
        plan: [
          { label: "Day 1", activity: "Bund & Pudong", detail: "Morning walk along the Bund → cross to Pudong via ferry (¥2) → Shanghai Tower observation deck (¥180) → Nanjing Road stroll" },
          { label: "Day 2", activity: "Old & New", detail: "Yu Garden (¥40) → French Concession tree-lined streets → Tianzifang art lanes → Xintiandi dinner" },
        ]
      },
      {
        days: "4 Days",
        plan: [
          { label: "Day 1", activity: "Bund + Pudong", detail: "Bund morning → Pudong Lujiazui → Shanghai Tower (world's 3rd tallest) → Huangpu River night cruise" },
          { label: "Day 2", activity: "Culture Day", detail: "Shanghai Museum (free) → People's Square → Yu Garden → Old City Bazaar" },
          { label: "Day 3", activity: "Disney / Water Town", detail: "Shanghai Disney Resort full day (¥475+), or Zhujiajiao Water Town (1h, ¥30) with canal boat ride" },
          { label: "Day 4", activity: "Local Life", detail: "French Concession cafés → Fuxing Park tai chi → Tianzifang → M50 art district → Xintiandi" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Mingtown Hiker Youth Hostel", area: "Near People's Square", price: "$12–25/night" },
      { tier: "Mid-range", name: "URBN Boutique Hotel", area: "Jing'an District", price: "$80–150/night" },
      { tier: "Luxury", name: "The Peninsula Shanghai", area: "The Bund", price: "$400+/night" },
    ],
    mustEat: [
      { dish: "Xiaolongbao (Soup Dumplings)", restaurant: "Jia Jia Tang Bao", restaurantCN: "佳家汤包", note: "Legendary soup dumplings, expect a queue" },
      { dish: "Shengjianbao (Pan-fried Buns)", restaurant: "Da Hu Chun", restaurantCN: "大壶春", note: "Crispy-bottom pork buns, Shanghai classic" },
      { dish: "Hairy Crab (seasonal)", restaurant: "Cheng Long Hang", restaurantCN: "成隆行", note: "Autumn only (Sep–Nov), a Shanghainese obsession" },
    ],
    transit: "Pudong (PVG): Maglev ¥50 (8 min) then metro. Hongqiao (SHA): Metro Line 2 direct (¥5). Metro ¥3–9, 19 lines. Taxi: ¥14 flagfall.",
    dayTrips: [
      { name: "Zhujiajiao Water Town", distance: "1h drive", highlight: "Ancient canal town with stone bridges and boat rides" },
      { name: "Suzhou", distance: "25 min by high-speed rail", highlight: "Classical gardens (UNESCO), silk museums" },
      { name: "Hangzhou", distance: "45 min by high-speed rail", highlight: "West Lake, tea plantations, Lingyin Temple" },
    ]
  },
  {
    name: "Xi'an",
    nameCN: "西安",
    bestFor: "Terracotta Warriors",
    dayCount: "2–3 days",
    bestTime: "Mar–May, Sep–Nov",
    topExperience: "Terracotta Warriors Museum — 8,000 life-sized soldiers, each with a unique face",
    image: "/images/destinations/xian.webp",
    intro: "Xi'an was the starting point of the Silk Road and capital of 13 dynasties. The Terracotta Warriors alone justify the trip, but the Muslim Quarter food scene and ancient city wall make it unforgettable.",
    dayPlans: [
      {
        days: "2 Days",
        plan: [
          { label: "Day 1", activity: "Terracotta Warriors", detail: "Terracotta Army Museum (3h, ¥120) — pits 1, 2, 3 → Muslim Quarter evening food crawl" },
          { label: "Day 2", activity: "City Wall & Pagodas", detail: "Bike the Ancient City Wall (14km, ¥54, 2h) → Giant Wild Goose Pagoda → Great Tang All Day Mall at night" },
        ]
      },
      {
        days: "3 Days",
        plan: [
          { label: "Day 1", activity: "Terracotta Warriors", detail: "Terracotta Army (full morning) → Huaqing Palace hot springs → Muslim Quarter dinner" },
          { label: "Day 2", activity: "City Wall", detail: "Bike the City Wall → Shaanxi History Museum → Bell & Drum Towers → Yongxing Fang food street" },
          { label: "Day 3", activity: "Mount Hua", detail: "Mount Hua (Huashan) day trip — one of China's five sacred mountains, famous plank walk" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Shuyuan Youth Hostel", area: "Near South Gate (Nanmen)", price: "$10–20/night" },
      { tier: "Mid-range", name: "Eastern House Boutique Hotel", area: "Inside City Wall", price: "$50–100/night" },
      { tier: "Luxury", name: "Wyndham Grand Xi'an South", area: "Near Giant Wild Goose Pagoda", price: "$100–200/night" },
    ],
    mustEat: [
      { dish: "Yangrou Paomo (Lamb Soup with Bread)", restaurant: "Tongshengxiang", restaurantCN: "同盛祥", note: "Xi'an's signature dish, crumble bread into lamb broth" },
      { dish: "Biangbiang Noodles", restaurant: "Muslim Quarter stalls", restaurantCN: "biangbiang面", note: "Thick hand-pulled noodles with chili oil" },
      { dish: "Roujiamo (Chinese Burger)", restaurant: "Fan Ji", restaurantCN: "樊记", note: "Braised pork in flatbread, Xi'an fast food" },
    ],
    transit: "Xi'an Airport (XIY): Shuttle bus ¥25 (1h) or metro Line 14. High-speed rail to Beijing (4.5h), Chengdu (3h). Metro ¥2–8. Taxi ¥9 flagfall.",
    dayTrips: [
      { name: "Mount Hua (Huashan)", distance: "1.5h by train", highlight: "Sacred mountain, thrilling cliffside plank walk" },
      { name: "Famen Temple", distance: "2h drive", highlight: "Buddhist temple with Sakyamuni finger-bone relic" },
    ]
  },
  {
    name: "Chengdu",
    nameCN: "成都",
    bestFor: "Pandas + food culture",
    dayCount: "3–4 days",
    bestTime: "Mar–Jun, Sep–Nov",
    topExperience: "See baby pandas at Chengdu Research Base — arrive by 7:30am for feeding time",
    image: "/images/destinations/chengdu.webp",
    intro: "Chengdu is China's capital of leisure — pandas in the morning, hot pot at night, and tea houses in between. The slower pace and incredible food scene make it many travelers' favorite stop.",
    dayPlans: [
      {
        days: "3 Days",
        plan: [
          { label: "Day 1", activity: "Pandas!", detail: "Chengdu Panda Base (7:30am, ¥55) → Jinli Ancient Street → Sichuan opera face-changing at Shufeng Yayun" },
          { label: "Day 2", activity: "Culture & Food", detail: "Wuhou Shrine → People's Park tea house (Heming) → Kuanzhai Alley → Hot pot at Shujiuxiang (蜀九香)" },
          { label: "Day 3", activity: "Leshan Buddha", detail: "Leshan Giant Buddha day trip (1.5h train, ¥80) — 71m carved Buddha → evening Sichuan food tour" },
        ]
      },
      {
        days: "4 Days",
        plan: [
          { label: "Day 1", activity: "Pandas", detail: "Panda Base early → Sichuan Cuisine Museum (¥60) with cooking demo → Jinli night stroll" },
          { label: "Day 2", activity: "City Life", detail: "People's Park + tea → Wuhou Shrine → Kuanzhai Alley → Hot pot + Sichuan opera" },
          { label: "Day 3", activity: "Leshan Buddha", detail: "Leshan Giant Buddha day trip → evening street food at Jinli" },
          { label: "Day 4", activity: "Dujiangyan", detail: "Dujiangyan Irrigation (UNESCO, 1h train) — 2,000-year-old engineering, or Mount Qingcheng" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Lazybones Hostel", area: "Near Kuanzhai Alley", price: "$8–15/night" },
      { tier: "Mid-range", name: "The Temple House", area: "Taikoo Li", price: "$120–200/night" },
      { tier: "Luxury", name: "Niccolo Chengdu", area: "IFS / Chunxi Road", price: "$200–350/night" },
    ],
    mustEat: [
      { dish: "Sichuan Hot Pot", restaurant: "Shujiuxiang", restaurantCN: "蜀九香", note: "The classic Chengdu hot pot chain, expect a wait" },
      { dish: "Mapo Tofu", restaurant: "Chen Mapo Tofu", restaurantCN: "陈麻婆豆腐", note: "The original since 1862, numbingly spicy" },
      { dish: "Dan Dan Noodles", restaurant: "Any good street stall", restaurantCN: "担担面", note: "Spicy sesame noodles, ¥10–15" },
    ],
    transit: "Tianfu (TFU): Metro Line 18 (¥10, 50 min). Shuangliu (CTU): Metro Line 10 (¥5). Metro ¥2–10. High-speed rail to Xi'an (3h), Chongqing (1.5h).",
    dayTrips: [
      { name: "Leshan Giant Buddha", distance: "1.5h train", highlight: "71m carved Buddha, world's largest stone Buddha" },
      { name: "Mount Qingcheng", distance: "1h train", highlight: "Taoist sacred mountain, lush forests" },
      { name: "Dujiangyan", distance: "1h train", highlight: "2,000-year-old irrigation system still in use" },
    ]
  },
  {
    name: "Zhangjiajie",
    nameCN: "张家界",
    bestFor: "Nature + adventure",
    dayCount: "2–4 days",
    bestTime: "Apr–May, Sep–Oct",
    topExperience: "Walk the glass bridge over Grand Canyon and see the Avatar floating mountains",
    image: "/images/destinations/zhangjiajie.webp",
    intro: "Zhangjiajie's quartz-sandstone pillars inspired the floating mountains in Avatar. It's China's most surreal landscape — mist-wrapped peaks, a glass bridge spanning a canyon, and the world's highest outdoor elevator.",
    dayPlans: [
      {
        days: "2 Days",
        plan: [
          { label: "Day 1", activity: "Avatar Mountains", detail: "National Forest Park (¥225) → Yuanjiajie (Avatar Mountain) → Bailong Elevator → Tianzi Mountain" },
          { label: "Day 2", activity: "Glass Bridge", detail: "Grand Canyon Glass Bridge (¥256) → Tianmen Mountain (¥258) — Heaven's Gate and 99-bend road" },
        ]
      },
      {
        days: "4 Days",
        plan: [
          { label: "Day 1", activity: "Forest Park", detail: "Golden Whip Stream → Huangshi Village → Yuanjiajie scenic area" },
          { label: "Day 2", activity: "Tianzi Mountain", detail: "Tianzi Mountain sunrise → Bailong Elevator → Ten-mile Gallery → Wulingyuan evening" },
          { label: "Day 3", activity: "Glass Bridge", detail: "Grand Canyon + Glass Bridge → Baofeng Lake boat ride" },
          { label: "Day 4", activity: "Tianmen Mountain", detail: "Tianmen Mountain cable car → Heaven's Gate → 99-bend road → cliff walk" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Zhangjiajie Zhongtian Hostel", area: "Wulingyuan entrance", price: "$8–15/night" },
      { tier: "Mid-range", name: "Pullman Zhangjiajie", area: "Wulingyuan", price: "$80–130/night" },
      { tier: "Luxury", name: "Neodalle Zhangjiajie", area: "Wulingyuan", price: "$150–250/night" },
    ],
    mustEat: [
      { dish: "Tujia Three-pot Stew", restaurant: "Wulingyuan local restaurants", restaurantCN: "三下锅", note: "Hearty Tujia minority dish with pork, tofu, vegetables" },
      { dish: "Sour Fish Hot Pot", restaurant: "Park entrance area", restaurantCN: "酸汤鱼", note: "Tujia-style sour and spicy fish stew" },
    ],
    transit: "Zhangjiajie Airport (DYG): Taxi to Wulingyuan (¥100, 40 min). High-speed rail from Changsha (3h), Chongqing (4h). Park shuttles included in ticket.",
    dayTrips: [
      { name: "Fenghuang Ancient Town", distance: "3h drive", highlight: "Stilt houses along Tuojiang River at night" },
    ]
  },
  {
    name: "Guilin & Yangshuo",
    nameCN: "桂林/阳朔",
    bestFor: "Karst scenery + cycling",
    dayCount: "3–4 days",
    bestTime: "Apr–Oct",
    topExperience: "Li River cruise from Guilin to Yangshuo — 83km of karst peaks reflected in emerald water",
    image: "/images/destinations/guilin.webp",
    intro: "Guilin and Yangshuo deliver China's most iconic landscape: limestone karst peaks rising from rice paddies and winding rivers. Yangshuo is the base for cycling, bamboo rafting, and rock climbing.",
    dayPlans: [
      {
        days: "3 Days",
        plan: [
          { label: "Day 1", activity: "Li River Cruise", detail: "Guilin → Yangshuo cruise (4h, ¥360) → West Street → Impression Liu Sanjie show" },
          { label: "Day 2", activity: "Yangshuo Countryside", detail: "Bike Ten-Mile Gallery → Yulong River bamboo raft (¥200) → Moon Hill hike → Farmhouse dinner" },
          { label: "Day 3", activity: "Rice Terraces", detail: "Longji Rice Terraces day trip (2h, ¥80) — hike between Ping'an and Dazhai villages" },
        ]
      },
      {
        days: "4 Days",
        plan: [
          { label: "Day 1", activity: "Arrive Guilin", detail: "Elephant Trunk Hill → Reed Flute Cave → Sun & Moon Pagodas at night" },
          { label: "Day 2", activity: "Li River", detail: "Li River cruise to Yangshuo → explore West Street afternoon" },
          { label: "Day 3", activity: "Yangshuo", detail: "Morning cycling → Yulong River rafting → Moon Hill → evening cooking class" },
          { label: "Day 4", activity: "Longji Terraces", detail: "Longji Rice Terraces day trip — Dazhai village hike, Yao minority culture" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Yangshuo Sudder Street Hostel", area: "West Street area", price: "$8–15/night" },
      { tier: "Mid-range", name: "Yangshuo Mountain Retreat", area: "Yulong River", price: "$60–120/night" },
      { tier: "Luxury", name: "Banyan Tree Yangshuo", area: "Fuli Town", price: "$300+/night" },
    ],
    mustEat: [
      { dish: "Guilin Rice Noodles", restaurant: "Chongshan Rice Noodles", restaurantCN: "崇善米粉", note: "City signature breakfast, ¥10–15 with all toppings" },
      { dish: "Beer Fish", restaurant: "West Street riverside restaurants", restaurantCN: "啤酒鱼", note: "Yangshuo specialty — river fish braised in beer" },
    ],
    transit: "Guilin Airport (KWL): Shuttle ¥20 (40 min). High-speed rail to Guangzhou (2.5h), Chengdu (5h). Yangshuo is 1.5h by bus from Guilin (¥25).",
    dayTrips: [
      { name: "Longji Rice Terraces", distance: "2h from Guilin", highlight: "Dragon's Backbone terraces, best May–Oct" },
      { name: "Xingping Ancient Town", distance: "40 min from Yangshuo", highlight: "The view on the ¥20 note" },
    ]
  },
  {
    name: "Yunnan",
    nameCN: "云南",
    bestFor: "Culture + diverse scenery",
    dayCount: "5–7 days",
    bestTime: "Mar–Jun, Sep–Nov",
    topExperience: "Tiger Leaping Gorge — one of the world's deepest gorges, with a 2-day hike through jaw-dropping scenery",
    image: "/images/destinations/yunnan.webp",
    intro: "Yunnan is China's most diverse province — snow-capped mountains, tropical rainforests, Tibetan culture, and ancient tea routes. Kunming, Dali, Lijiang, and Shangri-La form the classic circuit.",
    dayPlans: [
      {
        days: "5 Days",
        plan: [
          { label: "Day 1", activity: "Kunming Arrival", detail: "Green Lake Park → Yuantong Temple → Nanqiang Street for crossing-the-bridge noodles" },
          { label: "Day 2", activity: "Dali Old Town", detail: "High-speed rail to Dali (2h) → Old Town → Erhai Lake cycling → Three Pagodas" },
          { label: "Day 3", activity: "Lijiang", detail: "Train to Lijiang (1.5h) → UNESCO Old Town → Black Dragon Pool → Naxi music performance" },
          { label: "Day 4", activity: "Tiger Leaping Gorge", detail: "Gorge hike day 1 — Qiaotou → Naxi Guesthouse halfway (6–7h hiking)" },
          { label: "Day 5", activity: "Gorge Finish", detail: "Halfway → Tina's → Middle Gorge → return to Lijiang" },
        ]
      },
      {
        days: "7 Days",
        plan: [
          { label: "Day 1", activity: "Kunming", detail: "Stone Forest day trip (1.5h, ¥175) → Green Lake Park evening" },
          { label: "Day 2", activity: "Dali", detail: "Train to Dali → Erhai Lake cycling → Xizhou Old Town → tie-dye workshop" },
          { label: "Day 3", activity: "Dali → Lijiang", detail: "Cangshan Mountain cable car → train to Lijiang → Old Town evening" },
          { label: "Day 4", activity: "Gorge Day 1", detail: "Tiger Leaping Gorge — Qiaotou to Halfway Guesthouse" },
          { label: "Day 5", activity: "Gorge Day 2", detail: "Finish hike → return to Lijiang → Shuhe Ancient Town" },
          { label: "Day 6", activity: "Shangri-La", detail: "Bus to Shangri-La (4h) → Dukezong Ancient Town → Songzanlin Monastery (¥115)" },
          { label: "Day 7", activity: "Return", detail: "Pudacuo National Park → fly out from Diqing or return to Lijiang" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Kunming Cloudland Hostel", area: "Kunming city center", price: "$8–15/night" },
      { tier: "Mid-range", name: "The Bivou Lijiang", area: "Lijiang Old Town", price: "$60–120/night" },
      { tier: "Luxury", name: "Amandayan Lijiang", area: "Lijiang Old Town", price: "$500+/night" },
    ],
    mustEat: [
      { dish: "Crossing-the-Bridge Noodles", restaurant: "Jianxin Yuan", restaurantCN: "建新园", note: "Yunnan's most famous dish, Kunming specialty" },
      { dish: "Yak Hot Pot", restaurant: "Shangri-La local spots", restaurantCN: "牦牛火锅", note: "High-altitude Tibetan comfort food" },
      { dish: "Er Kuai (Rice Cake)", restaurant: "Dali street stalls", restaurantCN: "饵块", note: "Grilled rice cakes with savory fillings" },
    ],
    transit: "Kunming Airport (KMG): Metro Line 6 (¥5, 30 min). High-speed rail: Kunming → Dali (2h) → Lijiang (1.5h). Bus Lijiang → Shangri-La (4h).",
    dayTrips: [
      { name: "Stone Forest", distance: "1.5h from Kunming", highlight: "UNESCO karst formation, otherworldly rock landscape" },
      { name: "Shaxi Ancient Town", distance: "2h from Lijiang", highlight: "Well-preserved Tea Horse Road town" },
    ]
  },
  {
    name: "Guangzhou",
    nameCN: "广州",
    bestFor: "Cantonese food + trade hub",
    dayCount: "2–3 days",
    bestTime: "Oct–Dec",
    topExperience: "Dim sum brunch — Guangzhou invented it, and nowhere does it better. Go early for the full cart-pushing experience",
    image: "/images/destinations/guangzhou.webp",
    intro: "Guangzhou is the birthplace of Cantonese cuisine and a vibrant southern gateway. It rewards food lovers with China's best dim sum and a fascinating blend of old lanes and futuristic architecture.",
    dayPlans: [
      {
        days: "2 Days",
        plan: [
          { label: "Day 1", activity: "Culture & Dim Sum", detail: "Dim sum at Panxi (泮溪酒家) → Chen Clan Academy (¥10) → Shamian Island → Pearl River night cruise" },
          { label: "Day 2", activity: "Modern Guangzhou", detail: "Canton Tower (¥150) → Guangdong Museum (free) → Beijing Road → Shangxiajiu food street" },
        ]
      },
      {
        days: "3 Days",
        plan: [
          { label: "Day 1", activity: "Old Guangzhou", detail: "Dim sum → Chen Clan Academy → Shamian Island → Qingping Market → Baietan evening" },
          { label: "Day 2", activity: "New Guangzhou", detail: "Canton Tower → Zhujiang New Town → Guangdong Museum → Huacheng Square light show" },
          { label: "Day 3", activity: "Day Trip", detail: "Kaiping Diaolou (UNESCO, 2h) or Foshan (Nanfeng Kiln, martial arts museum, 30 min metro)" },
        ]
      },
    ],
    accommodation: [
      { tier: "Budget", name: "Lazy Gaga Hostel", area: "Yuexiu / Beijing Road", price: "$10–18/night" },
      { tier: "Mid-range", name: "LN Hotel Five", area: "Haizhu / Pearl River", price: "$80–150/night" },
      { tier: "Luxury", name: "Four Seasons Guangzhou", area: "Zhujiang New Town", price: "$250–400/night" },
    ],
    mustEat: [
      { dish: "Dim Sum", restaurant: "Panxi Restaurant", restaurantCN: "泮溪酒家", note: "Classic garden restaurant, go before 10am for full cart service" },
      { dish: "White Cut Chicken", restaurant: "Wenji", restaurantCN: "文记壹心鸡", note: "The definitive Cantonese chicken dish" },
      { dish: "Wonton Noodles", restaurant: "Baozai Wonton Noodles", restaurantCN: "宝仔云吞面", note: "Shrimp wontons with thin egg noodles in clear broth" },
    ],
    transit: "Baiyun Airport (CAN): Metro Line 3 to city (¥8, 45 min). High-speed rail to Shenzhen (30 min), Hong Kong (1h), Guilin (2.5h). Metro ¥2–12, 16 lines.",
    dayTrips: [
      { name: "Kaiping Diaolou", distance: "2h drive", highlight: "UNESCO fortified watchtowers, unique architectural fusion" },
      { name: "Foshan", distance: "30 min by metro", highlight: "Ancestral Temple, martial arts heritage" },
    ]
  },
];

export interface Itinerary {
  name: string;
  days: number;
  route: string;
  highlights: string;
  bestFor: string;
  estimatedCost: string;
  dayPlan: { day: number; title: string; city: string; activities: { label: string; detail: string }[]; stay: string; transport: string; food: string }[];
}


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
    bestFor: "Quick First Taste",
    estimatedCost: "$700-1,200",
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
    bestFor: "First-Time Visitors",
    estimatedCost: "$1,200-2,000",
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
    bestFor: "Best for Families",
    estimatedCost: "$1,800-2,800",
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
    bestFor: "Bucket-List Trip",
    estimatedCost: "$2,500-4,200",
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


export interface FAQItem { question: string; answer: string; }
export const faqs: FAQItem[] = [
  { question: "How many days do I need for a China trip?", answer: "For a first trip, 10–14 days is ideal. This lets you cover 3–4 cities at a comfortable pace. A 7-day trip works for a quick Beijing-only visit. For a comprehensive experience across 5+ cities, plan 21 days." },
  { question: "What is the best China itinerary for first-time visitors?", answer: "The classic Golden Triangle — Beijing (Great Wall, Forbidden City), Xi'an (Terracotta Warriors), Shanghai (modern skyline, Disney) — is perfect for first-timers. It offers history, culture, and modern China in one trip." },
  { question: "Is China safe for tourists?", answer: "China is one of the safest countries for travelers. Violent crime against tourists is extremely rare. Major cities are well-lit at night with heavy police presence. Common precautions like watching your belongings in crowded areas are sufficient." },
  { question: "How much does a trip to China cost?", answer: "Budget travelers can manage $50–100/day (hostels, local food, public transport). Mid-range travelers spend $100–200/day (3-4 star hotels, nice restaurants, Didi). Luxury travel runs $250+/day (5-star hotels, private guides, fine dining)." },
  { question: "Do I need a visa to visit China?", answer: "Most nationalities require a tourist visa (L visa) before arrival. However, China has greatly expanded visa-free access — travelers from 55 countries can stay up to 240 hours (10 days) when transiting, and citizens of 40+ countries can enter visa-free for up to 30 days. Check the official China travel portal for your country's requirements." },
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
export const visa240hCities = ["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Xi'an","Chongqing","Kunming","Xiamen","Qingdao","Wuhan","Hangzhou","Nanjing","Tianjin","Dalian","Shenyang","Guilin","Changsha","Harbin","Ningbo","Zhengzhou"];
export interface VisaPolicy { country: string; policy: string; detail: string; }
export const visaPolicyHighlights: VisaPolicy[] = [
  { country: "USA, UK, Canada, Australia, EU", policy: "L Visa required", detail: "Apply at Chinese embassy/consulate before travel. Single-entry 30-day tourist visa ~$140. Processing: 4–10 business days." },
  { country: "55 countries (transit)", policy: "240-hour visa-free (10 days)", detail: "Must hold a confirmed onward ticket to a third country/region. Travel freely across 24 provinces via 60+ designated ports." },
  { country: "Singapore, Japan, Korea + more", policy: "30-day visa-free", detail: "Ordinary passport holders from 40+ countries (Asia, Europe, Oceania, Americas) can enter China visa-free for up to 30 days for tourism or business." },
  { country: "UK, Canada (2026 trial)", policy: "30-day visa-free", detail: "British and Canadian passport holders enjoy visa-free entry for up to 30 days — trial period running through December 31, 2026." },
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
