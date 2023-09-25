// dom에서 조작해야 하는 요소를 변수에 저장하기
/* 작은 이미지 할당 */
let pics = document.querySelectorAll('.pic');
console.log(pics);
/* 큰 이미지 할당 */
const lightbox = document.querySelector('#lightbox');


const lightImg = document.querySelector('#lightboximg');
for(let i = 0; i < pics.length; i++){
    /* 속성으로 넣는 방법 */
    /* 돔을 활용한 방법 */
    /* 메서드로 하는 방법 */
    pics[i].addEventListener('click', showLightbox)
}
function showLightbox (){
    const big = this.getAttribute("data-src"); /* 클릭된 것의 속성을 가지고 온다. */
    console.log(big);
    lightImg.setAttribute('src', big);
    lightbox.style.display = 'block';
    document.querySelector('html').classList.add('on');
}

lightbox.onclick = function(){
    lightbox.style.display = 'none';
    document.querySelector('html').classList.remove('on');
}