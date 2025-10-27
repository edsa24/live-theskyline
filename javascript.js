// ============================
// NAVBAR SCROLL
// ============================
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
});

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

// ============================
// SMOOTH SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

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

// ============================
// CHATBOT FOR CONTACT MODAL
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById('chatBox');
  const chatInput = document.getElementById('chatInput');
  const sendChat = document.getElementById('sendChat');

  if (!chatBox || !chatInput || !sendChat) return;

  let step = 0;
  const consultationData = {};

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.margin = '5px 0';
    msg.style.padding = '5px 8px';
    msg.style.borderRadius = '5px';
    msg.style.background = sender === 'bot' ? '#f0f0f0' : '#5fa8d3';
    msg.style.color = sender === 'bot' ? '#000' : '#fff';
    msg.style.textAlign = sender === 'bot' ? 'left' : 'right';
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function botNextStep(userMessage) {
    switch(step) {
      case 0:
        consultationData.name = userMessage;
        addMessage("Thanks! What is your email?", "bot");
        step++;
        break;
      case 1:
        consultationData.email = userMessage;
        addMessage("Great! Please provide your phone number.", "bot");
        step++;
        break;
      case 2:
        consultationData.phone = userMessage;
        addMessage("Almost done! When would you like to schedule your consultation? (e.g., 2025-11-30 14:00)", "bot");
        step++;
        break;
      case 3:
        consultationData.datetime = userMessage;
        addMessage("Thank you! Your consultation request has been recorded:", "bot");
        addMessage(`Name: ${consultationData.name}`, "bot");
        addMessage(`Email: ${consultationData.email}`, "bot");
        addMessage(`Phone: ${consultationData.phone}`, "bot");
        addMessage(`Preferred Date/Time: ${consultationData.datetime}`, "bot");
        addMessage("We will contact you soon to confirm your consultation.", "bot");
        step++;
        break;
      default:
        addMessage("You have already submitted your consultation request. Thank you!", "bot");
    }
  }

  function sendMessage() {
    const text = chatInput.value.trim();
    if(!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    botNextStep(text);
    chatInput.focus();
  }

  // Attach events **directly**
  sendChat.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

  // Reset chat whenever modal opens
  const chatModal = document.getElementById('chatModal');
  chatModal.addEventListener('shown.bs.modal', () => {
    chatBox.innerHTML = `<div class="bot-message">Hi! I'm your Consultation Bot. Let's schedule your consultation.</div>`;
    chatInput.value = '';
    step = 0;
  });
});

