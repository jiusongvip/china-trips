with open("D:/workspaces/website/china-trips/src/pages/index.astro", "r", encoding="utf-8") as f:
    c = f.read()

# 1. Replace inline onclick with class-based approach
old_btn = "onclick='speak(this)' data-text={p.chinese}"
new_btn = "class='speak-btn' data-text={p.chinese}"
c = c.replace(old_btn, new_btn)
print("Button replaced:", old_btn not in c)

# 2. Replace the speak function with event-delegation version (plus keep function for clarity)
old_fn = "  function speak(el){if(!window.speechSynthesis)return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(el.dataset.text);u.lang=\"zh-CN\";u.rate=0.75;speechSynthesis.speak(u)}"
new_fn = "  document.addEventListener('click',function(e){var b=e.target.closest('.speak-btn');if(!b)return;e.preventDefault();if(!window.speechSynthesis)return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(b.dataset.text);u.lang='zh-CN';u.rate=0.75;speechSynthesis.speak(u)})"
c = c.replace(old_fn, new_fn)
print("Speak function replaced:", "addEventListener" in c)

with open("D:/workspaces/website/china-trips/src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(c)
print("Lines:", len(c.split("\n")))
