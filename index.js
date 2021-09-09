const navButton = document.getElementById('nav-button');
// let navPopup;

const toggleVisibility = () => {
  const navPopup = document.getElementById('nav-popup');
  navPopup.toggleAttribute('hidden');
  alert(1);
}
// const t = () => alert('you must have allowed JavaScript in the browser for this website');

navButton.addEventListener(
  'click',
  toggleVisibility 
);
