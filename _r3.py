import os, re
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "dist", "index.html"), "r", encoding="utf-8") as f:
    dist = f.read()

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find the closing of the Travel Styles section in dist
ts_end = dist.find("</section>", dist.find("Travel Styles"))
# Find the first script tag
sc_idx = dist.find("<script", 200000)
if sc_idx == -1:
    sc_idx = dist.rfind("<script")

if ts_end > 0 and sc_idx > ts_end:
    body = dist[ts_end + 10:sc_idx]
    print(f"Body HTML: {len(body)} chars")
else:
    print(f"ts_end={ts_end}, sc_idx={sc_idx}")
    # Just grab the whole main content
    main_end = dist.find("</main>")
    main_start = dist.find("<main>")
    body = dist[main_start + 6:main_end]
    print(f"Alt body: {len(body)} chars")

# Append body and scripts  
content += "\n" + body

# Bundle all JS
inline_scripts = re.findall(r"<script[^>]*>(.*?)</script>", dist, re.DOTALL)
for i, s in enumerate(inline_scripts):
    if i == 0:
        content += '\n<script type="application/ld+json" set:html={' + s.strip() + '}</script>\n'
        continue
    if len(s.strip()) < 5:
        continue

bundled_js = ""
for fname in os.listdir(os.path.join(BASE, "dist", "_astro")):
    if fname.startswith("index.astro_astro_type_script_index_0") and fname.endswith(".js"):
        with open(os.path.join(BASE, "dist", "_astro", fname), "r", encoding="utf-8") as f:
            bundled_js = f.read()
        break

content += '\n\n<script>\n' + bundled_js + '\n</script>\n'
content += '\n<script is:inline>\n' + inline_scripts[2].strip() + '\n</script>\n'
content += '\n<script>\n' + inline_scripts[3].strip() + '\n</script>\n'
content += '\n</BaseLayout>\n'

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print(f"Final: {len(content)} chars")