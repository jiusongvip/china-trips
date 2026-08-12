import os

BASE = r"D:\workspaces\website\china-trips"
with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find position after closing frontmatter ---
fm_end = content.find("---", 10) + 3

# The BaseLayout opening tag to insert
bl = '\n\n<BaseLayout title={pageTitle} description={pageDesc} ogImage="/images/hero/og-default.webp" schema={scheduleSchema}>\n'

content = content[:fm_end] + bl + content[fm_end:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Done - BaseLayout tag restored")
