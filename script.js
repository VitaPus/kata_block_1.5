let swiper = new Swiper('.swiper', {
  direction: "horizontal",
  spaceBetween: 15,
  slidesPerView: 1.3,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let hideBtn = function () {
  let clickkBtn = document.querySelector('.btn-slide--vision');
  let hideSlide = document.querySelectorAll('.hidden, .swiper-slide--hidden');
  if (clickkBtn) {
    clickkBtn.addEventListener('click', function () {
      clickkBtn.classList.toggle('active');
      hideSlide.forEach(slide => {
        slide.classList.toggle('hidden');
        slide.classList.toggle('swiper-slide--hidden');
      });
      if (clickkBtn.classList.contains('active')) {
        clickkBtn.textContent = 'Скрыть';
      } else {
        clickkBtn.textContent = 'Показать все';
      }
    });
  }
};

hideBtn();
