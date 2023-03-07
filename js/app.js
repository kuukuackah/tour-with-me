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

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
