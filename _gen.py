import json, os

def W(s):
    return s.replace("'", "\\'").replace("\n", "\\n")

lines = []
def L(s=""): lines.append(s)

L("// Auto-generated deep content for china-trips.com")
L("")
L("export interface Destination {")
L("  name: string;")
L("  nameCN: string;")
L("  bestFor: string;")
L("  dayCount: string;")
L("  bestTime: string;")
L("  topExperience: string;")
L("  image: string;")
L("  intro: string;")
L("  dayPlans: { days: string; plan: { label: string; activity: string; detail: string }[] }[];")
L("  accommodation: { tier: string; name: string; area: string; price: string }[];")
L("  mustEat: { dish: string; restaurant: string; restaurantCN: string; note: string }[];")
L("  transit: string;")
L("  dayTrips: { name: string; distance: string; highlight: string }[];")
L("}")
L()
L("print('generator written')")

with open("D:/workspaces/website/china-trips/_gen.py", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("generator script saved OK")
