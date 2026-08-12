with open("D:/workspaces/website/china-trips/src/pages/index.astro", "r", encoding="utf-8") as f:
    c = f.read()

# 1. Add speaker button to each language card
old = "<div class='text-lg text-[var(--color-accent)] mb-1'>{p.chinese}</div>"
new = "<div class='text-lg text-[var(--color-accent)] mb-1 flex items-center gap-1'><span>{p.chinese}</span> <button onclick='speak(this)' data-text={p.chinese} class='text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] opacity-40 hover:opacity-100 transition-opacity' title='Listen to pronunciation'>&#9654;</button></div>"
c = c.replace(old, new)
print("Button added:", old not in c)

# 2. Add speak() function to script
old2 = "var f=ct.querySelector(\".\"+c);if(f)f.click()}"
new2 = 'var f=ct.querySelector("."+c);if(f)f.click()}\n  function speak(el){if(!window.speechSynthesis)return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(el.dataset.text);u.lang="zh-CN";u.rate=0.75;speechSynthesis.speak(u)}'
c = c.replace(old2, new2)
print("Speak function added:", "speechSynthesis" in c)

with open("D:/workspaces/website/china-trips/src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(c)
print("Lines:", len(c.split("\n")))
