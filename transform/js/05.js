const o = $('.card');
const o2 = $('.h2');

//span은 애니메이트가 안 된다.같이 움직여서..
$('#top').on('mousemove', function (e) {
    let x = -($(window).innerWidth() / 2 - e.pageX) / 30;
    let y = ($(window).innerHeight() / 2 - e.pageY) / 10;

    o.attr('style', `transform:rotateY(${x}deg) rotateX(${y}deg)`); //태그의 속성을 바꾸는 것
    o2.attr({
        style : `transform:rotateY(${x*0.5}deg) rotateX(${y}deg) translateZ(20px) translateX(${y}px)`
    });
});
