// ============================================
// LE POSHE SCHOOL — V2 INTERACTIONS
// ============================================

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Counter animations
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const duration = 1800;
  const decimals = (el.dataset.decimals !== undefined) ? parseInt(el.dataset.decimals) : 0;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = decimals > 0 ? target.toFixed(decimals) : target;
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form handler
document.querySelectorAll('form.contact-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sent — we will be in touch';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    form.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.opacity = '1';
    }, 4000);
  });
});

// Marquee duplication (for seamless loop)
document.querySelectorAll('.marquee-track').forEach((track) => {
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
});

// Floating apply CTA — show after hero scroll
const floatCta = document.querySelector('.float-cta');
if (floatCta) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) floatCta.classList.add('visible');
    else floatCta.classList.remove('visible');
  });
}
