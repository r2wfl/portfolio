const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const statNumbers = document.querySelectorAll('.hero-stat-number');
const statColors = ['#8dff5a', '#3de0ff', '#ff4fd8', '#6a7dff', '#ff3b3b', '#ff9a3d'];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (statNumbers.length > 0) {
  let statIndex = 0;

  const applyStatColor = () => {
    const color = statColors[statIndex];
    statNumbers.forEach((number) => {
      number.style.color = color;
    });
  };

  applyStatColor();

  if (!prefersReducedMotion) {
    setInterval(() => {
      statIndex = (statIndex + 1) % statColors.length;
      applyStatColor();
    }, 2400);
  }
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (navToggle && navLinks && navCta) {
  const closeMenu = () => {
    navLinks.classList.remove('mobile-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (
      !navLinks.contains(event.target) &&
      !navToggle.contains(event.target) &&
      navLinks.classList.contains('mobile-open')
    ) {
      closeMenu();
    }
  });
}
