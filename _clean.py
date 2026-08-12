with open("D:/workspaces/website/china-trips/src/pages/index.astro", "r", encoding="utf-8") as f:
    c = f.read()

# Find the speechSynthesis code in the bundled <script>
marker = "speechSynthesis"
idx = c.find(marker)
if idx < 0:
    print("No speechSynthesis found in file")
else:
    # Find the surrounding document.addEventListener call
    ctx = c[idx-300:idx+200]
    # Find the start of the addEventListener
    addE_start = c.rfind("document.addEventListener", 0, idx)
    if addE_start < 0:
        addE_start = c.rfind("addEventListener", 0, idx)

    if addE_start > 0:
        # Find the end of this expression
        # It should end with }) or )})
        end1 = c.find("})", addE_start)
        end2 = c.find(")})", addE_start)
        if 0 < end1 < end2:
            end = end1 + 2
        elif end1 > 0:
            end = end1 + 2
        else:
            end = addE_start + 500

        old = c[addE_start:end]
        c = c.replace(old, "")
        print(f"Removed {len(old)} chars at {addE_start}")
    else:
        print(f"speechSynthesis at {idx} but no addEventListener nearby")
        print("Context:", repr(c[idx-50:idx+150]))

# Check
print("speechSynthesis left:", "speechSynthesis" in c)
print("speak-btn left:", "speak-btn" in c)

with open("D:/workspaces/website/china-trips/src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(c)
