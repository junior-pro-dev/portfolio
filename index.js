const navButton = document.getElementById('nav-button');
// let navPopup;

const toggleVisibility = () => {
  const navPopup = document.getElementById('nav-popup-id');
  navPopup.classList.toggle('nav-hidden');
  navPopup.classList.toggle('nav-popup');
}
// const t = () => alert('you must have allowed JavaScript in the browser for this website');

navButton.addEventListener(
  'click',
  toggleVisibility 
);
