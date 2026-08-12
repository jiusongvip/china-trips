import os, re
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

checks = ['cityGuides', 'styleTips', 'plannerBtn', 'planner-submit', 'initTabs']
for c in checks:
    print(c + ": " + str(c in content))

scripts = list(re.finditer(r'<script[^>]*>', content))
print("Script blocks: " + str(len(scripts)))
for m in scripts:
    start = m.start()
    tag = m.group()
    end = content.find('</script>', start)
    body = content[start:end+9]
    has_planner = "plannerBtn" in body
    has_speak = "speechSynthesis" in body
    has_reveal = "IntersectionObserver" in body
    has_schema = "ld+json" in tag
    label = "OTHER"
    if has_schema: label = "SCHEMA"
    elif has_planner: label = "PLANNER"
    elif has_speak: label = "SPEAK"
    elif has_reveal: label = "REVEAL"
    print("  " + str(m.start()) + ": " + str(len(body)) + " chars - " + label)