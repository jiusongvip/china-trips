import os, re

BASE = r"D:\workspaces\website\china-trips"
with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Replace seasonBanner.color to seasonBanner.style with inline CSS
# Pattern: color: "bg-emerald-50..." -> style: "background:#xxx;..."
replacements = [
    ('color: "bg-emerald-50 border-emerald-200 text-emerald-800"', 'style: "background:#ecfdf5;border-color:#a7f3d0;color:#065f46"'),
    ('color: "bg-sky-50 border-sky-200 text-sky-800"', 'style: "background:#f0f9ff;border-color:#bae6fd;color:#075985"'),
    ('color: "bg-amber-50 border-amber-200 text-amber-800"', 'style: "background:#fffbeb;border-color:#fde68a;color:#92400e"'),
    ('color: "bg-indigo-50 border-indigo-200 text-indigo-800"', 'style: "background:#eef2ff;border-color:#c7d2fe;color:#3730a3"'),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f"Replaced: {old[:40]}...")
    else:
        print(f"NOT FOUND: {old[:40]}...")

# Replace the div template
old_div = 'class={`border-b ${seasonBanner.color} border-opacity-30`}'
new_div = 'class="border-b" style={`${seasonBanner.style}`}'
if old_div in content:
    content = content.replace(old_div, new_div)
    print("Replaced banner div template")
else:
    print(f"NOT FOUND: banner div template")
    # Try finding it approximately
    idx = content.find('seasonBanner.color')
    if idx > 0:
        print(f"Found seasonBanner.color at pos {idx}: {content[idx-20:idx+60]}")

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
