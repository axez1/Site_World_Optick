let firstSlider = document.querySelectorAll('.main-slider-item');
let nextBtn = document.querySelector(".firstpage__swiper-button .next");
let prevBtn = document.querySelector(".firstpage__swiper-button .prev");

let countItem = firstSlider.length;
let activeItemFirstSlider = 0;

let autoPlaySlider = setInterval(() => {
  nextSlide();
}, 7000)

nextBtn.addEventListener('click', function() {
  clearInterval(autoPlaySlider);
  nextSlide();
})

prevBtn.addEventListener('click', function() {
  clearInterval(autoPlaySlider);
  prevSlide();
})

function nextSlide() {
  activeItemFirstSlider++;
  if(activeItemFirstSlider >= countItem) activeItemFirstSlider = 0;
  showSlider();
}

function prevSlide() {
  activeItemFirstSlider--;
  if(activeItemFirstSlider < 0 ) activeItemFirstSlider = countItem - 1;
  showSlider();
}

function showSlider() {

  let activeItemOld = document.querySelector('.slider-active').classList.remove('slider-active');
  
  firstSlider[activeItemFirstSlider].classList.add('slider-active');

  
}

export default firstSlider;