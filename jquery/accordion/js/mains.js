const depth1 = document.querySelectorAll('.gnb>li');
const sub = document.querySelectorAll('.sub');

depth1.forEach((el) => {
    el.addEventListener('click', function () {
        let tg = this;
        let subH = document.querySelector('.sub>li').clientHeight;
        let subLen = tg.children[1].childElementCount;
        let subTH = subH * subLen;
        subOff();
        tg.querySelector('.sub').classList.add('on');
        tg.querySelector('.sub').style.height = subTH + 'px';
    })
})

function subOff(){
    sub.forEach((el)=>{
        el.classList.remove('on');
        el.style.height = 0;
    })
}
