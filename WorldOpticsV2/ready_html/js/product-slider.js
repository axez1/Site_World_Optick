const productItems = [
  {
    "id": 1,
    "image": "../assets/images/leicaq3.png",
    "name":"Leica Q3",
    "alt": "leicaq3",
    "price":"1870"
  },
  {
    "id": 2,
    "image": "../assets/images/leicaq3.png",
    "name":"Leica SL2",
    "alt": "leicasl2",
    "price":"1450"
  },
  {
    "id": 3,
    "image": "../assets/images/leicaS3.png",
    "name":"Leica S3",
    "alt": "leicas3",
    "price":"1630"
  },
  {
    "id": 4,
    "image": "../assets/images/leicaS3.png",
    "name":"Leica S3",
    "alt": "leicas3",
    "price":"1630"
  },
  {
    "id": 5,
    "image": "../assets/images/leicaS3.png",
    "name":"Leica S3",
    "alt": "leicas3",
    "price":"1630"
  },
]

let activeProductSlide = 0;
const productPlace = document.querySelector(".products__cards");

let prevBtn = document.querySelector(".products__button .prev");
let nextBtn = document.querySelector(".products__button .next");
prevBtn.addEventListener('click', function() {
    prevSlide();
})
nextBtn.addEventListener('click', function() {
  nextSlide();
})

function nextSlide() {
  activeProductSlide = (activeProductSlide + 3) % productItems.length;
  if(activeProductSlide > productItems.length-1) activeProductSlide = 0;
  initSlider();
}

function prevSlide() {
  activeProductSlide = (activeProductSlide - 3 + productItems.length) % productItems.length;
  if(activeProductSlide < 0) activeProductSlide = productItems.length - 3;
  initSlider();
}

function initSlider() {
  productPlace.innerHTML = '';
  for(let i = 0; i < 3; i++) {
    let index = (activeProductSlide + i) % productItems.length;
    let productItem = productItems[index];
    let productCard = document.createElement('div');
    productCard.innerHTML = 
    `<div class="products__cards-swiper">
      <div class="products__cards-item">
        <div class="products__cards-img">
          <img src="${productItem.image}" alt="${productItem.alt}">
        </div>
        <div class="products__cards-title">
          <h4>${productItem.name}</h4>
        </div>
        <div class="products__cards-prise">
          <p>$ <span>${productItem.price}</span></p>
        </div>
        <div class="products__cards-btn">
          <button class="card-btn">Add To Cart</button>
        </div>
      </div>
    </div>`;
    productPlace.appendChild(productCard);
  }
}

initSlider();

export default productItems;