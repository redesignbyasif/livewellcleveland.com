const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width:1100px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
const floating = document.querySelector('.mobile-cta');
let heroVisible = true;
let footerVisible = false;
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.target.matches('.hero')) heroVisible = entry.isIntersecting;
    else footerVisible = entry.isIntersecting;
  }
  floating.classList.toggle('hidden', heroVisible || footerVisible);
});
floating.classList.add('hidden');
observer.observe(document.querySelector('.hero'));
observer.observe(document.querySelector('.final-cta'));
