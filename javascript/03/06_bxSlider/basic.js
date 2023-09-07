//슬라이드를 감싸는 부모를 제이쿼리 객체로 만든다.
// bxSlider()함수를 적용한다.

$('.basic_slider').bxSlider({
    mode :'vertical',
    speed : 100,
    auto : true,
    autoHover : true,
});

$('.img_ctl_slider').bxSlider({
    prevSelector : ".img_ctl .prev",
    nextSelector : ".img_ctl .next",
    /*  multiple : 슬라이드 이미지 여러개 나오는 것 */
    minSlides : 1,
    maxSlides : 4,
    moveSlides : 1,
    slideWidth : 200,
    slideMargin : 30,
    auto : true,
    speed : 400,
});

// 

$('.responsive_slider').bxSlider({
    minSlides : 1,
    maxSlides : 4,
    slideWidth : 800, /* 알아서 비율을 줄여준다. */
    slideMargin : 30,
    auto : true,
});

//

$('.video_slider').bxSlider({
    video : true,
    onSliderLoad : function(currentIndex){
        $('.video_slider li').eq(currentIndex + 1).find('video').get(0).play();
    },
    onSliderAfter : function($slideElement){
        $slideElement.siblings().find('video').get(0).pause();
        $slideElement.find('video').get(0).play();
    }
});


//

$('.ticker_slider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 9000
  });