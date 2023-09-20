$('.slide_wrap').bxSlider({
	mode: 'fade',
	auto: true,
	controls:false,
	pager:false
});
//.hide(),.show()
$('.btn>li:first-child').on('click',function(){
	$('.btn>li:last-child').removeClass('active');
	$('.btn>li:first-child').addClass('active');
	$('.notice').show();
	$('.gallery').hide();
})
$('.btn>li:last-child').on('click',function(){
	$('.btn>li:first-child').removeClass('active');
	$('.btn>li:last-child').addClass('active');
	$('.gallery').show();
	$('.notice').hide();
})