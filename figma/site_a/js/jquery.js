// 제이쿼리로 수정해보기
const depth1 = $('.depth1');

depth1.hover(
    function () {
        $('.depth2').css('display','block');
        // css속성을 다 쓸 수 있다./ css(속성, 속성의 값)
        $('header').addClass('on');
        // 클래스를 만드는 것
    },
    function () {
        $('.depth2').css('display','none');
        $('header').removeClass('on');
        // 클래스를 지우는 것
    }
)
// 한번에 두가지 일을 한다./ 1-마우스 올라갔을때, 2-마우스 내려갔을때

// depth1.addEventListener('mouseover', function () {
//     depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'block' })
//     document.querySelector('header').classList.add('on');
// });

// depth1.addEventListener('mouseout', function () {
//     depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'none' })
//     document.querySelector('header').classList.remove('on');
// });
