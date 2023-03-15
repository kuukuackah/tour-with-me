var typed = new Typed("#typed", {
  strings: [
    "Restaurants",
    "Attractions",
    "Hotels",
    "Chop Bars",
    "Beach Resorts",
    "Castles",
    "Nature Pack",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const images = document.querySelectorAll('.gallery img');
let index = 0;

function changeImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

setInterval(changeImage, 3000);


const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate the form fields
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Show an alert message
  alert('Your message has been sent. Thank you!');

  // Clear the form fields
  form.reset();
});