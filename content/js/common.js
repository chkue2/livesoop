$(function(){
  window.addEventListener('scroll', function(e){
    if($(this).scrollTop() > 0){
      $('.section__header').addClass('scrolled');
    } else {
      $('.section__header').removeClass('scrolled');
    }
  });
});

const goHome = () => {
  location.href = '/';
}
const goAcademy = () => {
  location.href = "/academy";
}
const goLive = (x) => {
  switch(x){
    case 1 : window.open('https://shoppinglive.naver.com/replays/200772', '_blank'); break; //여성청결제
    case 2 : window.open('https://view.shoppinglive.naver.com/replays/183553?from=share', '_blank'); break; //주얼리
    case 3 : window.open('https://view.shoppinglive.naver.com/replays/30141?from=share', '_blank'); break; //호카 신발
    case 4 : window.open('https://shoppinglive.naver.com/replays/193926', '_blank'); break; //옥수수
    case 5 : window.open('https://shoppinglive.naver.com/replays/199866', '_blank'); break; //크리스피 어니언
    case 6 : window.open('https://shoppinglive.naver.com/replays/196459', '_blank'); break; //샴푸
    case 7 : window.open('https://shoppinglive.naver.com/replays/253479', '_blank'); break; //마카롱
    case 8 : window.open('https://www.youtube.com/watch?v=Up9ZiuGLW7A', '_blank'); break; //위메프
    case 9 : window.open('https://shoppinglive.naver.com/replays/251878', '_blank'); break; //히스테모
    default: return false;
  }
}

const goYoutube = (x) => {
  switch(x){
    case 1 : window.open('https://www.youtube.com/watch?v=Foaw3-wE0l0', '_blank'); break; //뷰티마사지기
    case 2 : window.open('https://youtu.be/wJMgOf8LQjU', '_blank'); break; //시원스쿨
    case 3 : window.open('https://www.youtube.com/watch?v=a2HszHCXwK8', '_blank'); break; //TVN 드라마 리뷰
    case 4 : window.open('https://www.youtube.com/watch?v=LUR6MLX0ib4&list=PLe5ch1rXt2WPaWdcXkvMuZvCMTnUWlnxG&index=15', '_blank'); break; //DB 다이렉트 영상 상담 서비스
    case 5 : window.open('https://www.youtube.com/watch?v=W1COBnjxapI&list=PLe5ch1rXt2WPaWdcXkvMuZvCMTnUWlnxG&index=22', '_blank'); break; //BBQ 미국법인
    case 6 : window.open('https://www.youtube.com/watch?v=6fHVjgohp-4', '_blank'); break; //갤럭시 S20
    case 7 : window.open('https://www.youtube.com/watch?v=Up9ZiuGLW7A', '_blank'); break; //위메프
    default: return false;
  }
}

$(document).on('click', '.icon--insta', function(){
  window.open('https://www.instagram.com/livesoop/', '_blank');
});

$(document).on('click', '.icon--youtube', function(){
  window.open('https://www.youtube.com/channel/UC1VoMaDCshbxTGpPAjrdFMQ', '_blank');
});

$(document).on('click', '.icon--shopping', function(){
  window.open('https://smartstore.naver.com/zana?NaPm=ct%3Dkrvsrh6r%7Cci%3Dshopn%7Ctr%3Dslsl%7Chk%3D79565efcb383c867879a25e79802025a89556ed1%7Ctrx%3Dundefined', '_blank');
});

$(document).on('click', '.icon--blog', function(){
  window.open('https://linktr.ee/livesoop/', '_blank');
});

const openMenu = () => {
  $('.section.section__header').addClass('open');
  $('.header__mo').removeClass('close');
  $('.header__mo').addClass('open');
  $('.section.section__header .header__menu').attr('onclick', 'closeMenu()');
}

const closeMenu = () => {
  $('.section.section__header').removeClass('open');
  $('.header__mo').removeClass('open');
  $('.header__mo').addClass('close');
  $('.section.section__header .header__menu').attr('onclick', 'openMenu()');
}

const moveElementPosition = (x) => {
  closeMenu();
  const p = $(`#${x}`).offset().top - 30;
  window.scrollTo({
    top: p,
    behavior: 'smooth'
  });
}
const sendMail = (x, template) => {
  emailjs.init('user_1KMcY64rgbKrL2jkIfwiA');
  $('.loading').show();
                
  var lang = document.documentElement.lang;
  emailjs.send('service_hodkphm', template, x)
  //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
  .then(function(response) {
      alert('메일이 전송되었습니다.\n검토 후 연락드리겠습니다. 감사합니다!');   
      history.go(0);
  }, function(error) {
      alert('메일 전송에 실패하였습니다.');   
      $('.loading').hide();
  });
}
function breakSpace(str){
  if(str === '') return '';
  return str.replace(/ /gi, '');
}