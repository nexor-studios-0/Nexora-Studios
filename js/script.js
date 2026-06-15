// CLEAN FINAL SCRIPT (NO DUPLICATES)

const elements = document.querySelectorAll(
  ".feature-card, .portfolio-card, .testimonial-card, .pricing-card"
);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach((el) => scrollObserver.observe(el));

