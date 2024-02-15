const sliderItems = [
  {
    "id": 1,
    "image": "../assets/images/slider_hover/food.jpg",
    "name":"Pavel Sergun",
    "description": "I like to take pictures with a camera. I have a camera of the brand Leica SL2. I like to photograph animals. I like to be photographed in the background of landscapes."
  },
  {
    "id": 2,
    "image": "../assets/images/slider_hover/los.jpg",
    "name":"Ivan Pavlov",
    "description": "Mythical, nay mystical, the Ardennes forest attracts visitors as much as it impresses them. In the depths of these woods, crouches the black beast which gives this place its reputation."
  },
  {
    "id": 3,
    "image": "../assets/images/slider_hover/zubr.jpg",
    "name":"Captain America",
    "description": "It’s 6:45 pm in the Spessart, getting dark. I’m lying uphill near a small bush because I’ve noticed movement at the edge of the forest at about 160 meters. I measure the distance with my second-hand Leica CRF 2800 and I can just make out a roebuck at 166 meters at the forest’s edge."
  },
]

let activeSlide = 0;
const sliderPlace = document.querySelector(".swiper-items");

let prevBtn = document.querySelector(".about__swiper__button .prev");
let nextBtn = document.querySelector(".about__swiper__button .next");
prevBtn.addEventListener('click', function() {
    prevSlide();
})
nextBtn.addEventListener('click', function() {
  nextSlide();
})

function nextSlide() {
  activeSlide++;
  if(activeSlide > sliderItems.length-1) activeSlide = 0;
  initSliderAbout();
}

function prevSlide() {
  activeSlide--;
  if(activeSlide < 0) activeSlide = sliderItems.length-1;
  initSliderAbout();
}

const initSliderAbout = () => {
      sliderPlace.innerHTML = '';
      if(sliderItems.length > 0) {
        let activeItem = sliderItems[activeSlide];
        let newSlide = document.createElement('div');
        newSlide.dataset.id = activeItem.id;
        newSlide.innerHTML = 
                `<div class="review">
                    <div class="review-header">
                      <div class="review-avatar">
                        <img src="${activeItem.image}" alt="avatar">
                      </div>
                      <div class="review-username">
                        <h3>${activeItem.name}</h3>
                      </div>
                    </div>
                    <div class="review-text">
                      <p>${activeItem.description}</p>
                    </div>
                  </div>`;
            sliderPlace.appendChild(newSlide);
          };
          clearInterval(autoPlay);
          autoPlay = setInterval(() => {
            nextSlide();
          }, 4000);
  }

let autoPlay = setInterval(() => {
  nextSlide();
}, 4000);

initSliderAbout();

export default sliderItems;



