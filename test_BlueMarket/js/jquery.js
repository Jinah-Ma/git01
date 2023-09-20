const depth1 = $('.depth1');

depth1.hover(
    function () {
        $('.depth2').css('display','block');
        $('header').addClass('on');
    },
    function () {
        $('.depth2').css('display','none');
        $('header').removeClass('on');
    }
)

$('.slideBox').bxSlider({
    mode: 'fade',
    auto: true,
    speed: 50,
});

$('.btn>li:first-child').on('click', function(){
    $('.btn>li:first-child').addClass('active');
    $('.btn>li:last-child').removeClass('active');
    $('.notice').show();
    $('.gallery').hide();
});



$('.btn>li:last-child').on('click', function(){
    $('.btn>li:first-child').removeClass('active');
    $('.btn>li:last-child').addClass('active');
    $('.gallery').show();
    $('.notice').hide();
});