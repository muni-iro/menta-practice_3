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