import os
BASE = r"D:\workspaces\website\china-trips"
with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()
cs = content.find("const costBtn")
ce = content.find("</script>", cs)
print("cost JS: " + str(cs) + " to " + str(ce))
print("Around closing: " + repr(content[ce-80:ce+30]))
js_body = content[cs:ce]
print("Has </script> inside: " + str("</script>" in js_body))
# Also find any OTHER </script> that might be closing prematurely
all_closes = []
idx = 0
while True:
    idx = content.find("</script>", idx)
    if idx == -1: break
    all_closes.append(idx)
    idx += 9
print("All </script> positions: " + str(all_closes))