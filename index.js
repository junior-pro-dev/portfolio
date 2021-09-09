const navButton = document.getElementById('nav-button');
let navPopup;

const toggleVisibility = () => {
  if (!navPopup)
    navPopup = document.getElementById('nav-popup');

  navPopup.toggleAttribute('hidden');
}
// const t = () => alert('you must have allowed JavaScript in the browser for this website');

navButton.addEventListener(
  'click',
  toggleVisibility 
);
