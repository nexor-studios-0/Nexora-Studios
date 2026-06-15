// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

const hiddenElements = document.querySelectorAll(
  ".feature-card, .portfolio-card, .testimonial-card, .pricing-card, .cta"
);

hiddenElements.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});