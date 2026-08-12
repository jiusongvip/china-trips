import os, re
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "dist", "index.html"), "r", encoding="utf-8") as f:
    dist = f.read()

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find the Routes section in dist - look for "Popular Multi-City"
routes_idx = dist.find("Popular Multi-City")
if routes_idx > 0:
    section_start = dist.rfind("<section", 0, routes_idx)
    script_start = dist.find('<script type="application/ld+json"')
    if script_start == -1:
        script_start = dist.find("<script", 100000)
    
    body_html = dist[section_start:script_start]
    print(f"Extracted {len(body_html)} chars of body HTML")
else:
    # Fallback: find first <section after travel styles area
    print("Trying alternative extraction...")
    routes_idx = dist.find("class=\"section\"")
    if routes_idx > 0:
        section_start = dist.rfind("<section", 0, routes_idx + 100)
        script_start = dist.find('<script type="application/ld+json"')
        body_html = dist[section_start:script_start]
        print(f"Alt extraction: {len(body_html)} chars")

# Extract scripts
inline_scripts = re.findall(r"<script[^>]*>(.*?)</script>", dist, re.DOTALL)
speak_js = inline_scripts[2] if len(inline_scripts) > 2 else ""
reveal_js = inline_scripts[3] if len(inline_scripts) > 3 else ""

# Read bundled JS
bundled_js = ""
for fname in os.listdir(os.path.join(BASE, "dist", "_astro")):
    if fname.startswith("index.astro_astro_type_script_index_0") and fname.endswith(".js"):
        with open(os.path.join(BASE, "dist", "_astro", fname), "r", encoding="utf-8") as f:
            bundled_js = f.read()
        break

content += body_html
content += '\n\n<script>\n' + bundled_js + '\n</script>\n'
content += '\n<script is:inline>\n' + speak_js.strip() + '\n</script>\n'
if reveal_js:
    content += '\n<script>\n' + reveal_js.strip() + '\n</script>\n'
content += '\n</BaseLayout>\n'

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print(f"Final file: {len(content)} chars")