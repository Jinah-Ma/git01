
const depdh1 = $('.depdh1');
depdh1.hover(
    function(){
    $('.subMenu').css('display', 'block');
    $('header::before').css('width', '100%', 'overflow', 'visible');
},
function(){
    $('.subMenu').css('display', 'none',);
    $('header::before').css('width', '0');
});


$('.slide .inner').bxSlider({
    mode : 'fade',
    auto : 'true',
    controls:false,
	pager:false,
    speed : 50,
});


$('.btn1').on('click',function(){
	$('.btn2').removeClass('active');
	$('.btn1').addClass('active');
	$('.notice').show();
	$('.gallery').hide();
})
$('.btn2').on('click',function(){
	$('.btn1').removeClass('active');
	$('.btn2').addClass('active');
	$('.gallery').show();
	$('.notice').hide();
})