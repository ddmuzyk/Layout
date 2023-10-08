import menuSvg from '../../public/svg/menu.svg';
import xSvg from '../../public/svg/x.svg';

// Global variables
let menuOpen = false;

const checkbox = document.querySelector('.checkbtn');
const menu = document.getElementById('menu');
const ul = document.querySelector('.sections-container');
const togglers = document.querySelectorAll('.toggler');

// Template for the menu source
const menuTemplate = '/public/svg/';

// Function to toggle the checkbox

const toggleCheckbox = () => {
  if (window.innerWidth <= 1199.98) {
    if (menuOpen) {
      menuOpen = false;
      menu.src = menuSvg;
      ul.classList.remove('menuOpen')
    } else {
      menuOpen = true;
      menu.src = xSvg;
      ul.classList.add('menuOpen');
    }
  }
}


// Event listeners
togglers.forEach(toggler => {
  toggler.addEventListener('click', toggleCheckbox);
});
checkbox.addEventListener('click', toggleCheckbox);

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });