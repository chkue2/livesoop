
// $(function(){
//     Kakao.init('15a1166761145e86bfe65f6bc039d372');
// });

// $(document).on('click', '#kakao--copy', function(){
//     sendLink();
// });

// $(document).on('click', '#link--copy', function(){
//     var url = window.document.location.href;
    
//     var dummy = document.createElement("textarea");
//     document.body.appendChild(dummy);
//     dummy.value = url;
//     dummy.select();
//     document.execCommand("copy");
//     document.body.removeChild(dummy);

//     alert('링크가 복사되었습니다.');
// });

// $(document).on('click', '#twitter--copy', function(){
//     var url = window.document.location.href;
//     window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url));
// });

// function sendLink() {
//     var url = window.document.location.href;

//     Kakao.Link.createDefaultButton({
//         container: '#kakao--copy',
//         objectType: 'feed',
//         content:{
//             title: $('meta[property="og:title"]').attr('content'),
//             description: $('meta[property="og:description"]').attr('content'),
//             imageUrl: $('meta[property="og:image"]').attr('content'),
//             link:{
//                 mobileWebUrl: url,
//                 webUrl: url
//             }
//         },
//         buttons: [
//             {
//                 title: '자세히 보기',
//                 link: {
//                     mobileWebUrl: url,
//                     webUrl: url
//                 }
//             }
//         ]
//     });
// }