$(function(){
  let lastPointX = null;
  const hosts = [
    {img: '/content/media/img/mingi@2x.png', bg: '#E7EEF7'},
    {img: '/content/media/img/stu_01@2x.png', bg: '#EBECED'},
    {img: '/content/media/img/nari@2x.png', bg: '#FAF4EF'},
    {img: '/content/media/img/host@2x.png', bg: '#F8F8E5'},
    {img: '/content/media/img/stu_02@2x.png', bg: '#F4E8E4'},
    {img: '/content/media/img/host_02.png', bg: '#F1E1EC'},
    {img: '/content/media/img/host_03.png', bg: '#F7E7EB'},
    {img: '/content/media/img/host_04.png', bg: '#D8E7E8'},
    {img: '/content/media/img/host_05.png', bg: '#F5F2F3'},
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
  swiper3.on('slideChange', function(){
    const leng = hosts.length;
    let idx = swiper3.activeIndex - leng;
    idx = (idx < 0) ? (leng-1) : (idx > (leng-1)) ? 0 : idx;
    const host = hosts[idx];
    $('#select__image').attr('src', host.img);
    $('#seciton__bg').css('background-color', host.bg);
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
  $(document).on('mousedown', '#select__image', function(e){
    lastPointX = e.clientX;
  });
  $(document).on('mouseup', '#select__image', function(e){
    if(lastPointX < e.clientX) swiper3.slidePrev();
    else swiper3.slideNext();
  });
});

$(document).on('click', '#sendMail', function(){
  var name = $('#name').val();
  var tel = $('#tel').val();
  var email = $('#email').val();
  var content = $('#content').val();

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
  } if(breakSpace(content) === ''){
      alert('문의내용을 입력해 주세요.');
      $('#content').focus();
      return;
  } 

  var templateParams = {	
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
      name: name,
      tel: tel,
      email: email,
      content: content
  };

  sendMail(templateParams, 'template_jyowg0q');
});