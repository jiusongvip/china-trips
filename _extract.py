import sys
sys.stdout.reconfigure(encoding="utf-8")

# === Extract sections from _p1.py ===
import re
with open(r"D:\workspaces\website\china-trips\_p1.py", "r", encoding="utf-8") as f:
    p1_content = f.read()

# Extract itin_html, trips_html, routes_html, dest_html
sections = {}
for name in ["itin_html", "trips_html", "routes_html", "dest_html"]:
    # Find variable definition: name = r"""..."""
    pattern = name + r' = r"""'
    idx = p1_content.find(pattern)
    if idx >= 0:
        start = idx + len(pattern)
        # Find end of raw string (next unmatched """)
        end = p1_content.find('\n"""', start)
        if end >= 0:
            section_content = p1_content[start:end]
            sections[name] = section_content
            print(f"Extracted {name}: {len(section_content)} chars")
        else:
            print(f"Could not find end of {name}")
    else:
        print(f"Could not find {name}")

# Also extract short_sections (hero + stat + banner + planner)
idx = p1_content.find('short_sections = r"""')
if idx >= 0:
    start = idx + len('short_sections = r"""')
    end = p1_content.find('\n"""', start)
    if end >= 0:
        sections["short_sections"] = p1_content[start:end]
        print(f"Extracted short_sections: {len(sections['short_sections'])} chars")

print("Sections extracted:", list(sections.keys()))
