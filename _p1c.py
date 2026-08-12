import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find FAQ section
faq_start = content.find('id="faq"')
faq_sec_start = content.rfind("<section", 0, faq_start)
faq_sec_end = content.find("</section>", faq_start) + 10

# Extract FAQ
faq_html = content[faq_sec_start:faq_sec_end]
print("FAQ section length: " + str(len(faq_html)))

# Find visa section end (after "How to Apply for a China Tourist Visa")
visa_marker = "How to Apply for a China Tourist Visa"
ve = content.find(visa_marker)
visa_sec_end = content.find("</section>", ve) + 10
print("Visa section ends at: " + str(visa_sec_end))

# Remove FAQ from original position
content = content[:faq_sec_start] + content[faq_sec_end:]

# Re-read to get updated positions  
# Insert FAQ after visa section
content = content[:visa_sec_end] + "\n\n" + faq_html + content[visa_sec_end:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("FAQ moved up after visa section")