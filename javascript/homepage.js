// ============================
// HOMEPAGE ANIMATIONS
// ============================
document.querySelectorAll('.why-choose-us .list-group-item').forEach(item => {
  item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.02)');
  item.addEventListener('mouseleave', () => item.style.transform = 'scale(1)');
});

document.querySelectorAll('.property-img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Image click to modal
const modal = new bootstrap.Modal(document.getElementById('imageModal'));
document.querySelectorAll('.property-img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modalImage').src = img.src;
    modal.show();
  });
});