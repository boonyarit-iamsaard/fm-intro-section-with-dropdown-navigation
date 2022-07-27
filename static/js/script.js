const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
const navItemButtons = Array.from(nav.querySelectorAll('.nav-item--button'));

/**
 * Toggle the collapsible navigation menu
 * @param {Element} button - The button to toggle the navigation menu
 * @param {Boolean} [expanded] - Expands the collapsible navigation menu, otherwise collapses it (default: false).
 * */
const toggleCollapsibleNavMenu = (button, expanded = false) => {
  const collapsibleNavMenu = button.nextElementSibling;

  if (!collapsibleNavMenu) return;

  if (expanded) {
    button.classList.add('js-open');
    collapsibleNavMenu.style.maxHeight = collapsibleNavMenu.scrollHeight + 'px';
  } else {
    button.classList.remove('js-open');
    collapsibleNavMenu.style.maxHeight = null;
  }
};

/**
 * Toggle the navigation menu
 * @param {Element} button The button to toggle the menu
 * @param {Element} nav The navigation menu
 * @param {Element} overlay The overlay to toggle
 */
const toggleNavigationMenu = (button, nav, overlay) => {
  if (!button || !nav || !overlay) return;

  button.classList.toggle('js-open');
  nav.classList.toggle('js-open');
  overlay.classList.toggle('js-open');
};

hamburgerMenu.addEventListener('click', () => {
  toggleNavigationMenu(hamburgerMenu, nav, overlay);
  navItemButtons.forEach(b => toggleCollapsibleNavMenu(b));
});

overlay.addEventListener('click', () => {
  toggleNavigationMenu(hamburgerMenu, nav, overlay);
  navItemButtons.forEach(b => toggleCollapsibleNavMenu(b));
});

navItemButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.nextElementSibling.style.maxHeight) {
      toggleCollapsibleNavMenu(button);
    } else {
      navItemButtons.forEach(b => toggleCollapsibleNavMenu(b));
      toggleCollapsibleNavMenu(button, true);
    }
  });
});
