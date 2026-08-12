import os
BASE = r"D:\workspaces\website\china-trips"
with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Add image next to city name in destination panels
# Pattern: <h3 class="heading-md text-2xl...">{d.name} ...
old = '<h3 class="heading-md text-2xl text-[var(--color-text)] mb-2">{d.name}'
new = '<div class="flex items-start gap-3 mb-4"><img src={"/images/destinations/" + (d.name.toLowerCase().includes("guilin")?"guilin":d.name.toLowerCase().includes("yunnan")?"yunnan":d.name.toLowerCase().includes("zhangjiajie")?"zhangjiajie":d.name.toLowerCase()) + ".webp"} alt={d.name} class="w-24 h-16 object-cover rounded-lg flex-shrink-0" loading="lazy" /><div><h3 class="heading-md text-2xl text-[var(--color-text)] mb-2">{d.name}'
if old in content:
    content = content.replace(old, new)
    # Close the wrapper after nameCN span
    content = content.replace("{d.nameCN}</span>", "{d.nameCN}</span></div></div>")
    print("Added destination images")
else:
    print("Pattern not found")
    # Try simpler replacement
    idx = content.find('heading-md text-2xl text')
    if idx > 0:
        print(content[idx:idx+100])

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)