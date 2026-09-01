const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const toast = document.querySelector('.copy-toast');

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const setHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'Open menu';
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) return closeMenu();
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.querySelector('.sr-only').textContent = 'Close menu';
  mobileMenu.setAttribute('aria-hidden', 'false');
  mobileMenu.classList.add('is-open');
  document.body.classList.add('menu-open');
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
);
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
);
sections.forEach((section) => navObserver.observe(section));

document.querySelector('[data-copy-email]').addEventListener('click', async (event) => {
  const email = event.currentTarget.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email copied';
  } catch {
    toast.textContent = email;
  }
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
});
