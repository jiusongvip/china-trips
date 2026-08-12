import os

BASE = r"D:\workspaces\website\china-trips"
with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find the plannerOutput.innerHTML line
idx = content.find("plannerOutput.innerHTML = '<div")
if idx == -1:
    print("Not found")
    exit(1)

# Find end of this line (the ;)
end = content.find(";", idx)
print("Found plannerOutput line at", idx, "to", end)

# Build replacement
new_output = '''plannerOutput.innerHTML = (() => {
  var cityIcons = { Beijing: "\ud83c\udf6f", Xian: "\ud83d\udee1", Chengdu: "\ud83d\udc3c", Shanghai: "\ud83c\udf06", Guilin: "\ud83c\udf3f", Zhangjiajie: "\ud83c\udf04", Yunnan: "\u26f0" };
  var cityGuides = {
    Beijing: { act: "Forbidden City, Great Wall at Mutianyu, Temple of Heaven, Peking Duck at Siji Minfu", tip: "Book Forbidden City tickets 7 days ahead." },
    Xian: { act: "Terracotta Warriors Museum, bike the Ancient City Wall, Muslim Quarter food crawl", tip: "Muslim Quarter food scene alone is worth the trip." },
    Chengdu: { act: "Panda Base 7:30am, Sichuan hot pot at Shujiuxiang, Peoples Park tea house", tip: "Arrive before 8am for panda feeding time." },
    Shanghai: { act: "The Bund skyline, Shanghai Tower observation deck, French Concession cafes, Yu Garden", tip: "CNY2 Huangpu ferry gives best skyline views." },
    Guilin: { act: "Li River cruise to Yangshuo, cycle Ten-Mile Gallery, Yulong River bamboo raft", tip: "China's most photogenic experience." },
    Zhangjiajie: { act: "Avatar mountains at Yuanjiajie, Bailong Elevator, Glass Bridge", tip: "Tianmen Mountain needs separate ticket and full day." },
    Yunnan: { act: "Tiger Leaping Gorge hike, Lijiang Old Town, Erhai Lake cycling, Dali", tip: "Expect altitude at Lijiang (2,400m). Acclimatize." }
  };
  var tips = {
    solo: "Hostels are very social. Trip.com for trains, Didi for rides. Extremely safe after dark.",
    couple: "Book boutique hotels in French Concession (Shanghai) or hutong courtyards (Beijing).",
    family: "Kids love Panda Base, Shanghai Disney, and Great Wall toboggan slide.",
    friends: "Sichuan hot pot in Chengdu, craft beer in Shanghai, group-friendly everywhere."
  };
  var months = { "7": "Spring (Apr-May) or Autumn (Sep-Oct)", "10": "April-May / September-October", "14": "April-May / Sept-November", "21": "Sept-Oct ideal. Yunnan winter is mild." };
  var cost = {"7":"$700-1,400","10":"$1,200-2,000","14":"$1,800-2,800","21":"$2,500-4,200"};
  var sc = who.charAt(0).toUpperCase() + who.slice(1);
  var r2 = rec[days] && rec[days][who] ? rec[days][who] : ("a " + days + "-day trip covering 3-4 cities");

  var html = '<div class="card p-6 mb-5">';
  html += '<div class="flex items-center justify-between mb-4 flex-wrap gap-3"><div><h3 class="heading-md text-xl text-[var(--color-text)]">' + days + '-Day ' + sc + ' Trip</h3><p class="body-text text-xs mt-0.5">' + r2 + '</p></div><span class="heading-lg text-2xl text-[var(--color-accent)]">' + cost[days] + '<span class="text-xs text-[var(--color-text-muted)] font-normal"> /person</span></span></div>';
  html += '<div class="flex flex-wrap gap-2 mb-4"><span class="tag tag-success">' + days + ' days</span><span class="tag">' + sc + '</span>';
  interests.forEach(function(i) { html += '<span class="tag">' + i + '</span>'; });
  html += '</div>';

  var routeParts = r2.split(" \\u2192 ");
  html += '<div class="space-y-2 mb-4">';
  routeParts.forEach(function(part) {
    var m = part.match(/^([A-Za-z& ]+)/);
    if (m) {
      var cn = m[1].trim();
      var g = cityGuides[cn];
      var ic = cityIcons[cn] || "\ud83d\udccd";
      if (g) {
        html += '<div class="card p-3 border-l-2 border-l-[var(--color-accent)]"><div class="flex items-start gap-2"><span class="text-xl">' + ic + '</span><div><div class="text-sm font-semibold text-[var(--color-text)] mb-1">' + cn + '</div><p class="body-text text-xs">' + g.act + '</p><p class="text-xs text-[var(--color-accent)] mt-1 italic">Tip: ' + g.tip + '</p></div></div></div>';
      }
    }
  });
  html += '</div>';

  html += '<div class="card p-3 bg-[var(--color-accent-light)] mb-3"><p class="text-xs font-semibold text-[var(--color-accent)] mb-1">Travel Tips for ' + sc + '</p><p class="body-text text-xs">' + (tips[who] || "") + '</p></div>';
  html += '<div class="card p-3 mb-3"><p class="text-xs font-semibold text-[var(--color-text)] mb-1">Best Time to Go</p><p class="body-text text-xs">' + (months[days] || "April-May / September-October") + '</p></div>';
  html += '<div class="flex flex-wrap gap-2"><a href="#destinations" class="btn-primary text-xs px-4 py-2 no-underline">Explore Destinations</a><a href="#cost" class="card px-3 py-2 text-xs text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)]">Budget Calculator</a><a href="#clothing" class="card px-3 py-2 text-xs text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)]">Packing Guide</a></div>';
  html += '</div>';
  return html;
})();'''

content = content[:idx] + new_output + content[end+1:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Planner enhanced successfully")