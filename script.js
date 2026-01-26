// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-mobile");
    navToggle.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("nav-links-mobile")) {
        navLinks.classList.remove("nav-links-mobile");
        navToggle.classList.remove("open");
      }
    });
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const yOffset = -68; // account for fixed nav
    const rect = target.getBoundingClientRect();
    const y = rect.top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
