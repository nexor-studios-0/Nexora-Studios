// SCROLL REVEAL ANIMATION (FIXED)

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  observer.observe(section); // 👈 THIS WAS MISSING
});

// SAFE SCROLL REVEAL (NO HIDE INIT)

const elements = document.querySelectorAll(
  ".feature-card, .portfolio-card, .testimonial-card, .pricing-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach((el) => observer.observe(el));
