/* ════════════════════════════════════════════════════════════════
   Lógica del sitio. Normalmente no necesitas tocar este archivo —
   todo el texto y los datos viven en content.js
   ════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  let lang = localStorage.getItem("lang") || (navigator.language || "es").slice(0, 2);
  if (!I18N[lang]) lang = "es";

  /* ── Pinta todos los textos según el idioma ── */
  function render() {
    const t = I18N[lang];
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach(el => {
      const v = t[el.dataset.i18n];
      if (v) el.textContent = v;
    });

    $$("[data-brand]").forEach(el => (el.textContent = BRAND.name));
    $$("[data-hero-word]").forEach(el => (el.textContent = BRAND.heroWord || BRAND.name));
    $$("[data-hero-num]").forEach(el => (el.textContent = BRAND.heroNum || ""));

    /* Compromisos */
    $("#commitList").innerHTML = t.commitments.map((c, i) => `
      <li class="reveal" style="transition-delay:${(i % 3) * 90}ms">
        <span class="commit__n">${String(i + 1).padStart(2, "0")}</span>
        <p class="commit__t">${c[0]}</p>
        <p class="commit__d">${c[1]}</p>
      </li>`).join("");

    /* Ficha técnica */
    $("#techBody").innerHTML = t.tech
      .map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`)
      .join("");

    $("#langLabel").textContent = lang === "es" ? "EN" : "ES";
    observe();
  }

  /* ── Datos de contacto desde BRAND ── */
  function wireBrand() {
    const subject = encodeURIComponent(`${BRAND.name} — información para el canal`);
    $("#mailBtn").href  = `mailto:${BRAND.email}?subject=${subject}`;
    $("#waBtn").href    = `https://wa.me/${BRAND.whatsapp}`;
    $("#fMail").textContent  = BRAND.email;
    $("#fPhone").textContent = BRAND.phone;
    $("#fNom").textContent   = BRAND.nom;
    $("#fCrt").textContent   = BRAND.crt;
    $("#year").textContent   = new Date().getFullYear();
    document.title = `${BRAND.name} · Tequila 100% de agave · ${BRAND.origin}`;
  }

  /* ── Aparición al hacer scroll ── */
  let io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach(el => io.observe(el));
  }

  /* ── Barra superior sólida al bajar ── */
  function onScroll() {
    $("#nav").classList.toggle("nav--stuck", window.scrollY > window.innerHeight * 0.75);
  }

  /* ── Verificación de edad ── */
  function gate() {
    const g = $("#gate");
    if (sessionStorage.getItem("age-ok")) return;
    g.hidden = false;
    document.body.style.overflow = "hidden";
    $("#gateYes").addEventListener("click", () => {
      sessionStorage.setItem("age-ok", "1");
      g.hidden = true;
      document.body.style.overflow = "";
    });
  }

  /* ── Arranque ── */
  wireBrand();
  render();
  gate();
  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
  $("#lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    wireBrand();
    render();
  });
})();
