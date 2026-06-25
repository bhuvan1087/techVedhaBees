export function scrollToSection(event, href) {
  event.preventDefault();

  const target = document.querySelector(href);
  const header = document.querySelector('header');

  if (!target || !header) return;

  const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
  window.history.pushState(null, '', href);
  window.scrollTo({ top, behavior: 'smooth' });
}
