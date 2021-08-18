$(function(){
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
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
  var swiper3 = new Swiper(".liveSwiper4", {
    slidesPerView: 'auto',
    spaceBetween: 24,
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

const goCurriculum = (x) => {
  switch(x){
    case 1: window.open('https://smartstore.naver.com/zana/products/5663099305', '_blank'); break;
    case 2: window.open('https://smartstore.naver.com/zana/products/5708629794', '_blank'); break;
    case 3: window.open('https://smartstore.naver.com/zana/products/5365391881', '_blank'); break;
  }
}

const goCurriculumMenu = () => {
  moveElementPosition('curriculum');
}

const goContactMenu = () => {
  moveElementPosition('contact');
}

$(document).on('click', '#sendMail', function(){
  var name = $('#name').val();
  var tel = $('#tel').val();
  var email = $('#email').val();
  var service = $('#service').val();
  console.log(service)

  if(breakSpace(name) === ''){
      alert('이름을 입력해 주세요.');
      $('#name').focus();
      return;
  } else if(breakSpace(tel) === ''){
      alert('전화번호를 입력해 주세요.');
      $('#tel').focus();
      return;
  } else if(breakSpace(email) === ''){
      alert('이메일을 입력해 주세요.');
      $('#email').focus();
      return;
  } if(breakSpace(service) === ''){
      alert('희망분야 입력해 주세요.');
      $('#service').focus();
      return;
  } 

  var templateParams = {	
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
      name: name,
      tel: tel,
      email: email,
      service: service
  };

  sendMail(templateParams, 'template_jyowg0q');
});