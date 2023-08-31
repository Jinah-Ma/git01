// $('.menu_toggle_btn')가 클릭되면 할 일
// $('.menu_toggle_btn').click(function(){
//     $('.gnb').show();
// })
/* function(호출_값(인자)){실행} 기능=할일 ★*/
//$('태그').어떻게 할 것인가 


$('.menu_toggle_btn').click(function(){
    $('.gnb').stop().slideToggle('slow');
})