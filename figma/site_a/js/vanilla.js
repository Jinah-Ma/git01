// 자바 쓰는 곳
const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
        depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'block' })
        document.querySelector('header').classList.add('on');
});

depth1.addEventListener('mouseout', function () {
        depth1.querySelectorAll('.depth2').forEach((o) => { o.style.display = 'none' })
        document.querySelector('header').classList.remove('on');
});

// 순수한 자바스크립트를 vanilla라고 한다.

// slide

const slides = document.querySelectorAll('.slide_wrap li'); /* all은 여러개, 없으면 하나 */
let n = 0;
function slide() {
        // on클래스 삭제
        slides.forEach((slide) => { slide.classList.remove('on') }) /* 여러개를 다루는 아이// ()=>{} 펑션을 줄여서 쓴 것 */
        // 새로운 슬라이드에 'on'클래스 추가
        slides[n].classList.add('on');
        n++;
        if (n >= slides.length) { n = 0 }
}
setInterval(() => {
slide();
}, 2000);

slides[n].classList.add('on');