document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (navToggle && navLinks && navCta) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    navLinks.style.display = open ? 'flex' : '';
    navLinks.style.position = open ? 'absolute' : '';
    navLinks.style.top = open ? 'calc(100% + 0.6rem)' : '';
    navLinks.style.left = open ? '0' : '';
    navLinks.style.right = open ? '0' : '';
    navLinks.style.flexDirection = open ? 'column' : '';
    navLinks.style.padding = open ? '0.75rem' : '';
    navLinks.style.background = open ? 'rgba(8, 8, 8, 0.95)' : '';
    navLinks.style.border = open ? '1px solid rgba(255, 255, 255, 0.08)' : '';
    navLinks.style.borderRadius = open ? '18px' : '';
  });
}
