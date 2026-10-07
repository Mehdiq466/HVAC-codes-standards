/* HVAC Code Navigator — app logic (no build step, works on GitHub Pages) */
(function () {
  const $ = (sel) => document.querySelector(sel);
  const view = $("#view");

  const store = {
    get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  const state = {
    role: store.get("role", "all"),
    region: store.get("region", "US")
  };

  const ROLES = {
    all:   "Everyone",
    tech:  "Technician / installer",
    eng:   "Engineer / designer",
    owner: "Owner / homeowner / student"
  };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const badge = (type) => `<span class="badge badge-${type}">${TYPES[type].label}</span>`;
  const regionTag = (r) => `<span class="tag">${r === "US" ? "🇺🇸 US" : r === "CA" ? "🇨🇦 Canada" : "🌐 Intl"}</span>`;
  const inRegion = (code) => state.region === "ALL" || code.region === state.region;

  function selectors() {
    const roleOpts = Object.entries(ROLES).map(([k, v]) => `<option value="${k}" ${state.role === k ? "selected" : ""}>${v}</option>`).join("");
    const regOpts = [["US", "United States"], ["CA", "Canada"], ["ALL", "All regions"]]
      .map(([k, v]) => `<option value="${k}" ${state.region === k ? "selected" : ""}>${v}</option>`).join("");
    return `
      <div class="selectors">
        <label>I am a <select id="roleSel">${roleOpts}</select></label>
        <label>Working in <select id="regionSel">${regOpts}</select></label>
      </div>`;
  }

  function bindSelectors() {
    const r = $("#roleSel"), g = $("#regionSel");
    if (r) r.onchange = () => { state.role = r.value; store.set("role", r.value); route(); };
    if (g) g.onchange = () => { state.region = g.value; store.set("region", g.value); route(); };
  }

  /* ---------------- Home / job finder ---------------- */
  function renderHome() {
    const groups = CATEGORIES.map((c) => {
      const jobs = JOBS.filter((j) => j.cat === c.id);
      return `
        <section class="cat" data-cat="${c.id}">
          <h2>${c.label}</h2>
          <div class="grid">${jobs.map(jobCard).join("")}</div>
        </section>`;
    }).join("");

    view.innerHTML = `
      <section class="hero">
        <h1>Which HVAC codes apply to my job?</h1>
        <p class="lead">Pick the type of work and see the codes, standards and regulations that usually apply — and why. Built for technicians, engineers and anyone learning the trade.</p>
        <div class="search">
          <input id="jobSearch" type="search" placeholder="Describe the job — e.g. “mini split”, “kitchen hood”, “R-454B”, “boiler”…" autocomplete="off">
        </div>
        ${selectors()}
      </section>
      <div id="noJobs" class="empty" hidden>No matching jobs. Try the <a href="#/library">code library</a> search instead.</div>
      ${groups}`;

    bindSelectors();
    const input = $("#jobSearch");
    input.oninput = () => filterJobs(input.value);
  }

  function jobCard(j) {
    return `
      <a class="card job" href="#/job/${j.id}" data-text="${esc((j.title + " " + j.desc + " " + j.keywords).toLowerCase())}">
        <span class="icon" aria-hidden="true">${j.icon}</span>
        <span>
          <strong>${esc(j.title)}</strong>
          <small>${esc(j.desc)}</small>
        </span>
      </a>`;
  }

  function filterJobs(q) {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    document.querySelectorAll(".job").forEach((el) => {
      const ok = words.every((w) => el.dataset.text.includes(w));
      el.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll(".cat").forEach((sec) => {
      sec.hidden = !sec.querySelector(".job:not([hidden])");
    });
    $("#noJobs").hidden = shown > 0;
  }

  /* ---------------- Job detail ---------------- */
  function renderJob(id) {
    const job = JOBS.find((j) => j.id === id);
    if (!job) return renderNotFound();

    const items = job.items
      .map(([cid, why, look]) => ({ code: CODES[cid], cid, why, look }))
      .filter((i) => i.code && inRegion(i.code));

    const hiddenCount = job.items.length - items.length;

    const sections = ["regulation", "code", "standard", "guideline"].map((t) => {
      const list = items.filter((i) => i.code.type === t);
      if (!list.length) return "";
      return `
        <section class="type-group">
          <h2>${badge(t)} ${TYPES[t].plural}</h2>
          <p class="muted">${TYPES[t].blurb}</p>
          <ul class="req-list">${list.map(reqItem).join("")}</ul>
        </section>`;
    }).join("");

    const roleBlock = state.role === "all"
      ? Object.entries(job.roles).map(([k, v]) => `<div class="role-note"><h3>${ROLES[k]}</h3><p>${esc(v)}</p></div>`).join("")
      : `<div class="role-note"><h3>${ROLES[state.role]}</h3><p>${esc(job.roles[state.role])}</p></div>`;

    view.innerHTML = `
      <nav class="crumbs"><a href="#/">← All jobs</a></nav>
      <header class="job-head">
        <span class="icon big" aria-hidden="true">${job.icon}</span>
        <div>
          <h1>${esc(job.title)}</h1>
          <p class="lead">${esc(job.desc)}</p>
        </div>
      </header>
      ${selectors()}
      <section class="roles">${roleBlock}</section>
      ${verifyBox()}
      ${sections || `<p class="empty">No entries for this region yet.</p>`}
      ${hiddenCount ? `<p class="muted small">${hiddenCount} item(s) for other regions hidden — switch “Working in” to “All regions” to see them.</p>` : ""}
      <div class="actions"><button class="btn" onclick="window.print()">Print / save as PDF</button></div>`;
    bindSelectors();
  }

  function reqItem(i) {
    return `
      <li class="req">
        <div class="req-head">
          <a href="#/code/${i.cid}" class="req-name"><strong>${esc(i.code.short)}</strong> — ${esc(i.code.name)}</a>
          ${state.region === "ALL" ? regionTag(i.code.region) : ""}
        </div>
        <p>${esc(i.why)}</p>
        ${i.look ? `<p class="look"><span>Where to look:</span> ${esc(i.look)}</p>` : ""}
      </li>`;
  }

  function verifyBox() {
    return `
      <details class="verify">
        <summary>Before you start: confirm what's actually enforced where you work</summary>
        <ol>
          <li><strong>Find your AHJ</strong> — the building department (city/county/state) for the job address.</li>
          <li><strong>Check adopted editions & amendments</strong> — e.g. “2021 IMC with local amendments”. Codes differ by edition.</li>
          <li><strong>Check permit requirements</strong> — most replacements and all new installs need one.</li>
          <li><strong>Read the manufacturer's installation instructions</strong> — for listed equipment they are enforceable by code.</li>
          <li><strong>Check licensing</strong> — mechanical, gas, electrical and refrigeration work can each require a license.</li>
        </ol>
      </details>`;
  }

  /* ---------------- Library ---------------- */
  function renderLibrary(q) {
    view.innerHTML = `
      <section class="hero small">
        <h1>Code & standard library</h1>
        <p class="lead">Every code, standard, regulation and guideline on this site, in plain language.</p>
        <div class="search"><input id="libSearch" type="search" placeholder="Search — e.g. “refrigerant”, “ventilation”, “NFPA”, “Manual J”…" value="${esc(q || "")}"></div>
        <div class="selectors">
          <div class="chips" id="typeChips">
            <button class="chip active" data-type="">All</button>
            ${Object.entries(TYPES).map(([k, v]) => `<button class="chip" data-type="${k}">${v.label}s</button>`).join("")}
          </div>
          <label>Region <select id="regionSel">
            ${[["US", "United States"], ["CA", "Canada"], ["ALL", "All regions"]].map(([k, v]) => `<option value="${k}" ${state.region === k ? "selected" : ""}>${v}</option>`).join("")}
          </select></label>
        </div>
      </section>
      <div id="libList" class="grid lib"></div>`;

    let typeFilter = "";
    const input = $("#libSearch");
    const draw = () => {
      const words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      const list = Object.entries(CODES).filter(([id, c]) => {
        if (!(state.region === "ALL" || c.region === state.region)) return false;
        if (typeFilter && c.type !== typeFilter) return false;
        const text = (c.short + " " + c.name + " " + c.summary + " " + c.topics.join(" ")).toLowerCase();
        return words.every((w) => text.includes(w));
      });
      $("#libList").innerHTML = list.length ? list.map(([id, c]) => `
        <a class="card code" href="#/code/${id}">
          <span class="card-top">${badge(c.type)} ${regionTag(c.region)}</span>
          <strong>${esc(c.short)}</strong>
          <small class="name">${esc(c.name)}</small>
          <small>${esc(c.summary)}</small>
        </a>`).join("") : `<p class="empty">Nothing matches. Try fewer words.</p>`;
    };
    input.oninput = draw;
    document.querySelectorAll("#typeChips .chip").forEach((b) => {
      b.onclick = () => {
        document.querySelectorAll("#typeChips .chip").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        typeFilter = b.dataset.type;
        draw();
      };
    });
    $("#regionSel").onchange = (e) => { state.region = e.target.value; store.set("region", e.target.value); draw(); };
    draw();
  }

  /* ---------------- Code detail ---------------- */
  function renderCode(id) {
    const c = CODES[id];
    if (!c) return renderNotFound();
    const pub = PUBLISHERS[c.pub];
    const usedIn = JOBS.filter((j) => j.items.some(([cid]) => cid === id));
    view.innerHTML = `
      <nav class="crumbs"><a href="#/library">← Library</a></nav>
      <header class="code-head">
        <div class="card-top">${badge(c.type)} ${regionTag(c.region)}</div>
        <h1>${esc(c.short)}</h1>
        <p class="subtitle">${esc(c.name)}</p>
      </header>
      <p class="lead">${esc(c.summary)}</p>
      <section>
        <h2>What it covers</h2>
        <ul class="topics">${c.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </section>
      <section>
        <h2>Publisher</h2>
        <p><a href="${pub.url}" target="_blank" rel="noopener">${esc(pub.name)} ↗</a></p>
      </section>
      ${usedIn.length ? `
      <section>
        <h2>Jobs where this applies</h2>
        <div class="grid">${usedIn.map(jobCard).join("")}</div>
      </section>` : ""}`;
  }

  /* ---------------- Learn ---------------- */
  function renderLearn() {
    view.innerHTML = `
      <section class="hero small">
        <h1>Learn the basics</h1>
        <p class="lead">How HVAC codes, standards and regulations fit together — read this first if you're new.</p>
      </section>

      <section class="learn">
        <h2>Code vs. standard vs. regulation vs. guideline</h2>
        <div class="grid four">
          ${Object.entries(TYPES).map(([k, v]) => `
            <div class="card static">${badge(k)}<p>${{
              code: "Tells you <em>what</em> must be done. Written as model codes (IMC, IRC, NEC…) and becomes <strong>law</strong> when a state or city adopts it.",
              standard: "Tells you <em>how</em> — detailed technical requirements (ASHRAE 15, UL 181, SMACNA). Becomes enforceable when a code <strong>references</strong> it.",
              regulation: "Government rules that apply regardless of local codes — e.g. EPA refrigerant rules, DOE efficiency minimums, OSHA safety.",
              guideline: "Recognized methods and best practice (ACCA Manuals J/S/D). Some are required by code — e.g. the IRC requires sizing per Manual J and S."
            }[k]}</p></div>`).join("")}
        </div>
      </section>

      <section class="learn">
        <h2>How a code becomes law</h2>
        <ol class="steps">
          <li><strong>Written</strong> — organizations like ICC, NFPA and IAPMO publish model codes, usually on a 3-year cycle (2018, 2021, 2024…).</li>
          <li><strong>Adopted</strong> — a state or city adopts a specific edition, often years later.</li>
          <li><strong>Amended</strong> — the jurisdiction may add, delete or change sections.</li>
          <li><strong>Enforced</strong> — the AHJ (building department/inspector) reviews plans, issues permits and inspects.</li>
        </ol>
        <p class="muted">That's why two cities next to each other can have different rules — always check the edition adopted where the job is.</p>
      </section>

      <section class="learn">
        <h2>Where to read codes</h2>
        <ul class="topics">
          <li><a href="https://codes.iccsafe.org/" target="_blank" rel="noopener">ICC Digital Codes ↗</a> — free read-only access to I-Codes (IMC, IRC, IECC…), including many state versions.</li>
          <li><a href="https://www.nfpa.org/codes-and-standards" target="_blank" rel="noopener">NFPA ↗</a> — free online access to read NFPA codes (account required).</li>
          <li><a href="https://www.ashrae.org/technical-resources/standards-and-guidelines" target="_blank" rel="noopener">ASHRAE ↗</a> — read-only versions of several key standards.</li>
          <li><a href="https://www.epa.gov/section608" target="_blank" rel="noopener">EPA Section 608 ↗</a> — refrigerant rules and technician certification.</li>
          <li><a href="https://www.energycodes.gov/" target="_blank" rel="noopener">DOE Building Energy Codes Program ↗</a> — which energy code each state has adopted.</li>
          <li><a href="https://www.ecfr.gov/" target="_blank" rel="noopener">eCFR ↗</a> — full text of federal regulations (EPA, DOE, OSHA).</li>
        </ul>
      </section>

      <section class="learn">
        <h2>Glossary</h2>
        <dl class="glossary">${GLOSSARY.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join("")}</dl>
      </section>`;
  }

  function renderNotFound() {
    view.innerHTML = `<p class="empty">Page not found. <a href="#/">Go home</a></p>`;
  }

  /* ---------------- Router ---------------- */
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [page, arg] = hash.split("/");
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.page === (page || "home")));
    if (!page) renderHome();
    else if (page === "job") renderJob(arg);
    else if (page === "library") renderLibrary();
    else if (page === "code") renderCode(arg);
    else if (page === "learn") renderLearn();
    else renderNotFound();
  }

  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

  /* theme toggle */
  const root = document.documentElement;
  const saved = store.get("theme", "");
  if (saved) root.dataset.theme = saved;
  $("#themeBtn").onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  };

  route();
})();
