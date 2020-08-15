// ===========slick============
$('.slide-contents').slick({
    centerMode: true,
    centerPadding: '22%',
    autoplay: true,
    arrows: false,

    responsive: [{
        breakpoint: 768, // 切り替えたいウィンドウサイズ
             settings: {
                  centerPadding: '10%', // 実際に変更、追加したい設定
        }
   }]
});
// ===========/slick============

// ===========スクロールフェイドインアクション============

$(window).scroll(function (){
     $('.fadeIn, .fadeInRight').each(function(){
         let targetElement = $(this).offset().top;
         let scroll = $(window).scrollTop();
         let windowHeight = $(window).height();
         if (scroll > targetElement - windowHeight){
             $(this).css('opacity','1');
             $(this).css('transform','translateY(0)');
         }
     });
 });

 // ===========/スクロールフェイドインアクション============
