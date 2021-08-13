$(function(){
  const hosts = [

  ];
  var swiper = new Swiper(".liveSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".liveSwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
  var swiper3 = new Swiper(".liveSwiper3", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper4 = new Swiper(".liveSwiper4", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination4",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});