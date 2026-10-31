(() => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "×" : "☰";
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
    if (menu) menu.textContent = "☰";
  }));

  let language = "en";
  const languageToggle = document.getElementById("languageToggle");
  languageToggle?.addEventListener("click", () => {
    language = language === "en" ? "te" : "en";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-te]").forEach(el => {
      el.textContent = el.dataset[language];
    });
    languageToggle.textContent = language === "en" ? "తెలుగు" : "English";
  });

  let textScale = 1;
  const applyScale = () => document.documentElement.style.fontSize = `${16 * textScale}px`;
  document.getElementById("increaseText")?.addEventListener("click", () => {
    textScale = Math.min(1.25, +(textScale + 0.05).toFixed(2)); applyScale();
  });
  document.getElementById("decreaseText")?.addEventListener("click", () => {
    textScale = Math.max(0.85, +(textScale - 0.05).toFixed(2)); applyScale();
  });
  document.getElementById("resetText")?.addEventListener("click", () => { textScale = 1; applyScale(); });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The Google review-write URL must be updated with the gym's exact Google Place ID.
  // Until then, direct visitors to the Maps listing rather than a broken review form.
  const writeReview = document.getElementById("writeReview");
  if (writeReview) writeReview.href = "https://maps.app.goo.gl/ZYxffZHoNJFXM6zdA";
})();
