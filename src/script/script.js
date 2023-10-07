import menuSvg from '../../public/svg/menu.svg';
import xSvg from '../../public/svg/x.svg';

// Remove the checkbox input from the DOM, use a variable instead

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
  if (window.innerWidth <= 858) {
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



togglers.forEach(toggler => {
  toggler.addEventListener('click', toggleCheckbox);
});
checkbox.addEventListener('click', toggleCheckbox);