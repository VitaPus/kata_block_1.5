let swiper = new Swiper('.swiper', {
  direction: "horizontal",
  spaceBetween: 15,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
