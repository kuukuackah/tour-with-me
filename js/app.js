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