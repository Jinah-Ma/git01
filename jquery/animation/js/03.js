$('.box').on('click', function(){
    const tg = $(this);
    //제이쿼리 객체 '.data()' 메서드 : 값을 저장할 수 있다.
console.log(tg.data('click') === 'even'); //짝수번째 클릭/ false

let check = false;

/* if(tg.data('click') === 'even'){ */
if(check !== false){
    // tg.data('click', 'odd'); //홀수번째 클릭
    tg.animate({width : '100px', height : 100, opacity : 1}, 1000, 'easeInOutSine');
    check = true;
} else {
    // tg.data('click', 'even'); //even === true
    tg.animate({width : '200px', height : '200px', opacity: 0.5}, 1000, 'easeInBounce');
    check = false;
}
})

$('.box1').data('text', 'abc');
console.log($('.box1').data('text'));
//text라는 키에 abc값을 넣을 수 있다. 애니메이션을 할때 차등으로 딜레이를 주려할때 주로 쓴다.

$('.box2').data('text');
console.log($('.box2').data('text'));

