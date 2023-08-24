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

// slide
const slides=$('.slide_wrap li');
// 변수/ =: 할당연산자, 좌항에 우항의 값을 할당하다.
let n=0;
// 변수/ n에 숫자 0을 할당했다.

function slide() {
    slides.removeClass('on');
    slides.eq(n).addClass('on');
n++; /* 변수+1 계속 더하기 1을 한다. */
if(n>=slides.length){n=0} /* 제한을 걸어줘야 한다./ .length : 알아서 몇개인지 세준다. */
}
setInterval(() => {
slide();
}, 2000);

slides.eq(n).addClass('on');

// tab
const tabBtn=$('.board .bottons li');
const panels=$('.panels>div');
tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    panels.hide();
    // 다 숨기라는 의미
    panels.eq(tg).show();
    // 이 부분을 보여주라는 의미
    tabBtn.removeClass('on');
    tabBtn.eq(tg).addClass('on');
});



// depth1.addEventListener('mouseover', function () {
//     depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'block' })
//     document.querySelector('header').classList.add('on');
// });

// depth1.addEventListener('mouseout', function () {
//     depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'none' })
//     document.querySelector('header').classList.remove('on');
// });
