import audioMain from './audio.js';
import sliderItems from './about-slider.js';
import productItems from './product-slider.js';
import canvas from './canvas.js';
import firstSlider from './firstpage-slider.js';
import videoSlider from './video.js';
import form from './form.js';

document.body.onload = function(){

  setTimeout( function(){
  let preloader = document.getElementById('preloader');
  if ( !preloader.classList.contains('hide') )
  {
      preloader.classList.add('hide');
  }
  }, 2500);
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#header__nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active-bar');
}

let sections = document.querySelectorAll('section');
let navigationItems = document.querySelectorAll('.nav-a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');
    
    if( top >= offset && top < offset + height) {
      navigationItems.forEach( links => {
        links.classList.remove('nav-active');
        document.querySelector('.nav-a[href*=' + id + ']').classList.add('nav-active');
      })
    }
  })

  let header = document.querySelector('.wraper-heder');
  header.classList.toggle('headBodyMove', window.scrollY > 500);
}
