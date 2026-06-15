// SCROLL ANIMATION (FINAL CLEAN)

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