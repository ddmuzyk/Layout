import menuSvg from '../../public/svg/menu.svg';
import xSvg from '../../public/svg/x.svg';


const checkbox = document.getElementById('check');
const menu = document.getElementById('menu');

// Template for the menu source
const menuTemplate = '/public/svg/';

// Function to toggle the checkbox

const toggleCheckbox = () => {
  if (checkbox.checked) {
    checkbox.checked = false;
    menu.src = menuSvg;
  } else {
    menu.src = xSvg;
  }

}

const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', toggleCheckbox);