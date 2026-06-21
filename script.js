const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (navToggle && navLinks && navCta) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
