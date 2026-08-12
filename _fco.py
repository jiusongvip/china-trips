import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

cs = content.find("const costBtn")
ce = content.find("</script>", cs) + 9
old_cost = content[cs:ce]

new_cost = """const costBtn = document.getElementById("cost-submit");
  if (costBtn) { costBtn.addEventListener("click", () => {
    const t = parseInt(document.getElementById("cost-travelers")?.value||"1"), d = parseInt(document.getElementById("cost-days")?.value||"1"), s = document.getElementById("cost-style")?.value;
    const r = {budget:75,mid:150,luxury:300}; const dr = r[s]||150; const pp = Math.round(dr/Math.max(1,t))*d;
    const perDay = Math.round(pp/d);
    const cats = [
      {label:"Accommodation",pct:35,val:Math.round(pp*.35),color:"#C2413F", ic:"F"},
      {label:"Food & Drink",pct:25,val:Math.round(pp*.25),color:"#D97706", ic:"G"},
      {label:"Transport",pct:20,val:Math.round(pp*.2),color:"#2563EB", ic:"T"},
      {label:"Activities & Tickets",pct:12,val:Math.round(pp*.12),color:"#059669", ic:"A"},
      {label:"Shopping & Misc",pct:8,val:pp-Math.round(pp*.35)-Math.round(pp*.25)-Math.round(pp*.2)-Math.round(pp*.12),color:"#7C3AED", ic:"M"}
    ];
    const labels = {budget:"Budget Traveler",mid:"Mid-range",luxury:"Luxury"};
    const tips = {budget:"Hostels, street food, public transport. Great for solo backpackers.",mid:"3-4 star hotels, nice restaurants, Didi rides. Best value for most travelers.",luxury:"5-star hotels, fine dining, private guides. The ultimate China experience."};

    var h = '<div class="card p-5" style="margin-bottom:12px">';
    h += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:16px"><div><div class="tag" style="margin-bottom:4px">' + (labels[s]||"Mid-range") + '</div><div style="font-size:0.75rem;color:var(--color-text-muted)">' + d + ' days &middot; ' + t + ' traveler(s)</div></div><div style="text-align:right"><div style="font-size:2rem;font-weight:700;color:var(--color-accent)">$' + pp.toLocaleString() + '</div><div style="font-size:0.75rem;color:var(--color-text-muted)">$' + perDay.toLocaleString() + ' per day</div></div></div>';

    h += '<div style="margin-bottom:12px">';
    cats.forEach(function(c) {
      var pct = c.val*100/pp;
      h += '<div style="margin-bottom:8px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px"><div style="display:flex;align-items:center;gap:6px"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:6px;background:' + c.color + '15;color:' + c.color + ';font-size:0.75rem;font-weight:700">' + c.ic + '</span><span style="font-size:0.8125rem;font-weight:600;color:var(--color-text)">' + c.label + '</span></div><span style="font-size:0.9375rem;font-weight:700;color:var(--color-text)">$' + c.val.toLocaleString() + '</span></div><div style="height:6px;background:var(--color-border-light);border-radius:3px;overflow:hidden"><div style="height:100%;width:' + Math.round(pct) + '%;background:' + c.color + ';border-radius:3px;transition:width 0.5s ease"></div></div></div>';
    });
    h += '</div>';

    h += '<div class="card" style="padding:12px;background:var(--color-accent-light);border-color:var(--color-accent-light)"><p style="font-size:0.75rem;color:var(--color-accent);font-weight:600;margin-bottom:2px">' + (labels[s]||"") + ' Tips</p><p class="body-text" style="font-size:0.75rem">' + (tips[s]||"") + '</p></div>';
    h += '</div>';

    document.getElementById("cost-result").innerHTML = h;
    document.getElementById("cost-result").classList.remove("hidden");
  });}"""

content = content[:cs] + new_cost + content[ce:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Done")