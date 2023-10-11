// $('.box1').hide(); display: none이랑 같다. 미리 숨겨져 있게끔 한다.
$('#btn1').on('click', function (e) {
    //e : 이벤트 객체
    console.log(e);
    $('.box1').hide("slow", function () {
        console.log("함수");
    });
    /* 두개의 인자만 넣을 수 있다. 앞은 스트링이나 숫자를 입력해 시간을 줄 수 있고, 뒤에는 함수를 쓴다. */

    e.preventDefault();
    // a태그는 이걸 써야 클릭시 위로 올라가지 않는다.
    /* return false; */
    //이것도 마찬가지. (결과값을 반환하고 이 뒤에는 실행 안 하는 것.)
})

$('#btn2').on('click', function (e) {
    //e : 이벤트 객체
    console.log(e);
    $('.box1').show(400, function () {
        console.log("함수");
    });
    e.preventDefault();
})

$('#btn3').on('click', function () {
    $('.box2').stop().toggle("fast", function () {
        alert('함수');
        //.stop() 하던 것을 멈추고 새 명령을 하라는 것. 토글오류를 해결할 수 있다.(애니메이션에는 항상 써야 한다.)
    });
})

$('#btn4').on('click', function () {
    console.log($(this));
    //부모의 형제를 선택하고 싶다.
    $(this).parent().next().slideUp();
    //css코드로 애니메이션모음이 slideup,down에 집어넣어진 것.
})

$('#btn5').on('click', function () {
    $(this).parent().next().slideDown(800, function () {
        alert('이것도 함수를 쓸 수 있다');
    });
})

$('#btn6').on('click', function () {
    $(this).parent().next().slideToggle();
})

$('#btn7').on('click', function () {
    $(this).parent('p').next().fadeOut();
    // 부모가 여럿이면 지정할 수도 있다.
})
$('#btn8').on('click', function () {
    $(this).parent().next().fadeIn('slow', function () {
        alert('이것도 함수를 쓸 수 있다');
    });
})
$('#btn9').on('click', function () {
    $(this).parent().next().stop().fadeToggle('nomal');
})

$('#btn10').on('click', function () {
    $('#box3').fadeTo('slow', 0.3);
    // 속도와 불투명도 두개를 받는다.
})
$('#btn11').on('click', function () {
    $(this).parent().next('#box3').fadeTo('slow', 1);
    // 부모 형제들 중 누군가를 특정할 수도 있다.
})