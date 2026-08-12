import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Replace the 8 plain text tab buttons with styled ones
# Beijing
content = content.replace('<button data-tab="0" class="dest-tab-btn">Beijing</button>',
    '<button data-tab="0" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#C2413F;color:#fff;font-size:10px;font-weight:700;margin-right:6px">BJ</span>Beijing</button>')

# Shanghai  
content = content.replace('<button data-tab="1" class="dest-tab-btn">Shanghai</button>',
    '<button data-tab="1" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#2563EB;color:#fff;font-size:10px;font-weight:700;margin-right:6px">SH</span>Shanghai</button>')

# Xi'an
content = content.replace('<button data-tab="2" class="dest-tab-btn">Xi&#39;an</button>',
    '<button data-tab="2" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#D97706;color:#fff;font-size:10px;font-weight:700;margin-right:6px">XA</span>Xi&#39;an</button>')

# Chengdu
content = content.replace('<button data-tab="3" class="dest-tab-btn">Chengdu</button>',
    '<button data-tab="3" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#059669;color:#fff;font-size:10px;font-weight:700;margin-right:6px">CD</span>Chengdu</button>')

# Zhangjiajie
content = content.replace('<button data-tab="4" class="dest-tab-btn">Zhangjiajie</button>',
    '<button data-tab="4" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#7C3AED;color:#fff;font-size:10px;font-weight:700;margin-right:6px">ZJ</span>Zhangjiajie</button>')

# Guilin
content = content.replace('<button data-tab="5" class="dest-tab-btn">Guilin &amp; Yangshuo</button>',
    '<button data-tab="5" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#0891B2;color:#fff;font-size:10px;font-weight:700;margin-right:6px">GL</span>Guilin &amp; Yangshuo</button>')

# Yunnan
content = content.replace('<button data-tab="6" class="dest-tab-btn">Yunnan</button>',
    '<button data-tab="6" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#DB2777;color:#fff;font-size:10px;font-weight:700;margin-right:6px">YN</span>Yunnan</button>')

# Guangzhou
content = content.replace('<button data-tab="7" class="dest-tab-btn">Guangzhou</button>',
    '<button data-tab="7" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#9333EA;color:#fff;font-size:10px;font-weight:700;margin-right:6px">GZ</span>Guangzhou</button>')

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Dest tab buttons enhanced")