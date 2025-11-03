// script.js
// 🌸 Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show-menu');
}

// 🌸 Modal
function openModal() {
  document.getElementById('enquiryModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('enquiryModal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const enquiryBtn = document.querySelector('.enquiry-btn');
  if (enquiryBtn) enquiryBtn.addEventListener('click', openModal);

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle?.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('slide-open');
    mobileMenu.classList.toggle('slide-open');
    mobileMenu.classList.toggle('hidden');
    menuToggle.textContent = isOpen ? '☰' : '✖';
  });

  // 🌸 Floating Shapes
  const floatingShapes = document.createElement('div');
  floatingShapes.className = 'floating-shapes';
  for (let i = 0; i < 5; i++) {
    const shape = document.createElement('div');
    shape.className = 'shape';
    floatingShapes.appendChild(shape);
  }
  document.body.appendChild(floatingShapes);

  // 🌸 Floating Flowers
  const flowers = ['🌸', '🌺', '🌼', '🏵️', '🌹', '🌻'];
  for (let i = 0; i < 8; i++) {
    const flower = document.createElement('div');
    flower.className = 'floating-flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.fontSize = `${Math.random() * 20 + 10}px`;
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(flower);
  }

  // 🌸 Confetti
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.backgroundColor = ['#F6B6C3', '#D8C1DC', '#400027', '#ffe7f4'][Math.floor(Math.random() * 4)];
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    document.body.appendChild(confetti);
  }

  // 🌸 Fade-in on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // 🌸 GSAP Scroll Animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8
    });
  });

  // 🌸 Bounce Animation on Cards
  const cards = document.querySelectorAll('.program-card, .testimonial-card, .facility-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power1.out" });
    });
  });
});
