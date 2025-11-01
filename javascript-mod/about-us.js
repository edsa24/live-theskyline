// ============================
// ABOUT US ANIMATIONS
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".mission-card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});

// Team section fade-in
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) card.classList.add("visible");
  });
});

// Property section image modal info
document.addEventListener("DOMContentLoaded", function () {
  const imageModal = document.getElementById("imageModal");
  if(imageModal){
    imageModal.addEventListener("show.bs.modal", function (event) {
      const trigger = event.relatedTarget;
      const imageSrc = trigger.getAttribute("data-bs-image");
      const imageTitle = trigger.getAttribute("data-bs-title");
      const imageCaption = trigger.getAttribute("data-bs-caption");

      document.getElementById("modalImage").src = imageSrc;
      document.getElementById("modalTitle").textContent = imageTitle;
      document.getElementById("modalCaption").textContent = imageCaption;
    });
  }
});

// Amenities hover
document.querySelectorAll('.amenity-image').forEach(img => {
  img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.03)');
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});

// Animate on scroll helper
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-slide, .animate-fade');
  const windowBottom = window.innerHeight + window.scrollY;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    if(windowBottom > elementTop + 100) el.classList.add('show');
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Bullets clickable
const bullets = document.querySelectorAll('.bullet.clickable');
bullets.forEach(bullet => {
  bullet.addEventListener('click', () => {
    bullets.forEach(b => b !== bullet ? b.classList.remove('active') : null);
    bullet.classList.toggle('active');
  });
});

// Initialize AOS
if(typeof AOS !== 'undefined'){
  AOS.init({ duration: 1000, once: true });
}

// Property modal dynamic info
const propertyModal = document.getElementById('propertyModal');
if(propertyModal){
  propertyModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const title = button.getAttribute('data-title');
    const price = button.getAttribute('data-price');
    const desc = button.getAttribute('data-desc');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDesc').textContent = desc;
  });
}
