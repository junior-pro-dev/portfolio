const navButton = document.getElementById('nav-button');
// let navPopup;

const toggleVisibility = () => {
  const navPopup = document.getElementById('nav-popup');
  navPopup.classList.toggle('nav-hidden');
}
// const t = () => alert('you must have allowed JavaScript in the browser for this website');

navButton.addEventListener(
  'click',
  toggleVisibility 
);
