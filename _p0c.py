import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find and replace the planner form section
pf = content.find('id="trip-planner"')
fe = content.find("</form>", pf)

# Build new quiz-style planner
new_planner_form = """id="trip-planner" class="space-y-8">
            <!-- Step 1: Duration -->
            <div>
              <label class="block text-sm font-semibold text-[var(--color-text)] mb-3">Step 1: How many days do you have?</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="planner-days-cards">
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" data-value="7" onclick="document.getElementById('planner-days').value='7';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-2xl font-bold text-[var(--color-accent)] mb-1">7</div>
                  <div class="text-xs text-[var(--color-text-secondary)]">days</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Quick city break</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" data-value="10" onclick="document.getElementById('planner-days').value='10';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-2xl font-bold text-[var(--color-accent)] mb-1">10</div>
                  <div class="text-xs text-[var(--color-text-secondary)]">days</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Golden Triangle</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" data-value="14" onclick="document.getElementById('planner-days').value='14';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-2xl font-bold text-[var(--color-accent)] mb-1">14</div>
                  <div class="text-xs text-[var(--color-text-secondary)]">days</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Grand tour</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" data-value="21" onclick="document.getElementById('planner-days').value='21';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-2xl font-bold text-[var(--color-accent)] mb-1">21</div>
                  <div class="text-xs text-[var(--color-text-secondary)]">days</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">See it all</div>
                </div>
              </div>
              <select id="planner-days" class="hidden">
                <option value="">Select</option><option value="7">7</option><option value="10">10</option><option value="14">14</option><option value="21">21</option>
              </select>
            </div>

            <!-- Step 2: Travel Style -->
            <div>
              <label class="block text-sm font-semibold text-[var(--color-text)] mb-3">Step 2: Who are you traveling with?</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="planner-who-cards">
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-who').value='solo';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-xl mb-1">S</div>
                  <div class="text-sm font-semibold text-[var(--color-text)]">Solo</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Independent explorer</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-who').value='couple';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-xl mb-1">C</div>
                  <div class="text-sm font-semibold text-[var(--color-text)]">Couple</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Romantic getaway</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-who').value='family';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-xl mb-1">F</div>
                  <div class="text-sm font-semibold text-[var(--color-text)]">Family</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Kid-friendly fun</div>
                </div>
                <div class="card p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-who').value='friends';this.parentElement.querySelectorAll('.card').forEach(c=>c.classList.remove('ring-2','ring-[var(--color-accent)]'));this.classList.add('ring-2','ring-[var(--color-accent)]')">
                  <div class="text-xl mb-1">G</div>
                  <div class="text-sm font-semibold text-[var(--color-text)]">Friends</div>
                  <div class="text-[10px] text-[var(--color-text-muted)] mt-1">Group adventure</div>
                </div>
              </div>
              <select id="planner-who" class="hidden">
                <option value="">Select</option><option value="solo">Solo</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option>
              </select>
            </div>

            <!-- Step 3: Interests -->
            <div>
              <label class="block text-sm font-semibold text-[var(--color-text)] mb-3">Step 3: What interests you? (pick any)</label>
              <div class="flex flex-wrap gap-2">
                {["History","Food","Nature","Cities","Culture","Adventure"].map(i => (<label class="cursor-pointer"><input type="checkbox" value={i} class="peer hidden" data-interest /><span class="inline-block px-4 py-2 rounded-full border border-[var(--color-border)] text-sm peer-checked:bg-[var(--color-accent)] peer-checked:text-white peer-checked:border-[var(--color-accent)] transition-colors">{i}</span></label>))}
              </div>
            </div>

            <button type="button" id="planner-submit" class="btn-primary w-full text-base py-3.5">Get My Personalized Route</button>
          </form>"""

# Replace: from id="trip-planner" to </form>
old_form = content[pf + len('id="trip-planner"'):fe]
content = content[:pf + len('id="trip-planner"')] + new_planner_form + content[fe + 7:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Quiz-style planner form installed")