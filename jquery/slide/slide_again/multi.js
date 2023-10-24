const slideWrapper = $('.slide_wrapper'); //최상위 부모
const slides = slideWrapper.find('.slides'); // 이동할요소 (li의 부모 ul)
const slide = slides.find('li'); // li 슬라이드
const slideCount = slide.length; //슬라이드의 총 갯수
const slideWidth = slide.width(); //li 각각 너비
const slideGap = 30; // li간격

let currentIdx = 0; //초기값
let moveAmt; //slideWidth+slideGap 이동거리, 레이아웃 배치
let newSlides; //새 슬라이드 목록을 저장할 변수(클론까지도)

const nextBtn = slideWrapper.find('.next'); //다음버튼
const prevBtn = slideWrapper.find('.prev'); //이전버튼

const pager = $('.pager'); //페이저
let pagerHTML = '';

let maxSlides = 3; //반응형
let responsiveGap = 20; //간격값
let responseWidth; //계산된 슬라이드 너비

responseWidth = slideWidth;

//페이저 버튼

slide.each(function (i) {
    pagerHTML += `<a href="#">${i + 1}</a>`;
});
pager.html(pagerHTML);

pager.find('a').on('click', function (e) {
    e.preventDefault();
    let i = $(this).index(); //인덱스 번호를 찾는 것 //eq는 선택하는 것
    moveSlideCb(i - 1);
    console.log(i);
});

// li 클론 생성
cloneSlide();
function cloneSlide() {
    // 뒤
    slides.append(slide.clone().addClass('clone'));
    // 앞
    slides.prepend(slide.clone().addClass('clone'));
}

// 슬라이드 배치
slideLayout(slideWidth, slideGap);
function slideLayout(sw, sm) {
    //li 가로배치
    newSlides = $('.slide_wrapper li'); //클론들까지도 포함하여 재할당
    moveAmt = sw + sm;
    newSlides.each(function (idx) {
        $(this).css({ left: moveAmt * idx + 'px', width: sw + 'px' });
    });
}

//ul 중앙정렬
setSlidePos();
function setSlidePos() {
    const ulMoveAmt = -moveAmt * slideCount;
    slides.css({ transform: `translateX(${ulMoveAmt}px)` });
}


//autoplay이동함수 (1)

//시간마다 호출하는 것
/* setInterval(() => {
    moveSlide();
}, 650);

function moveSlide() {
    currentIdx++;

    // 돌아오는 함수
    if (currentIdx > slideCount) {
        slides.css('left', 0); //레프트 값을 바로 0으로 가게끔 한다.
        currentIdx = 0;
    }

    //트렌지션이 되고 안 되고의 차이가 있다. css는 트렌지션값도 줘야 스르륵 움직인다.
    //애니메이트는 여러 css값을 모아둔 함수이다.
    //slides.stop().animate({속성}, 진행시간 숫자, 가속도 옵션ease 혹은 함수function);
    slides.stop().animate({
        left: moveAmt * -currentIdx
    }, 650);
} */


//autoplay이동함수 (2)
//콜백을 활용한 이동함수(함수를 또 불러서 일을 시키는 것)

let timer = undefined; //autoplay 정지, 재생 함수
autoSlide();
function autoSlide() {
    //선언문에 넣는다.
    timer = setInterval(() => {
        moveSlideCb(currentIdx + 1);
    }, 650);
}

function stopSlide() {
    clearInterval(timer); //setInterval을 정지시킬 수 있는 것
    timer = undefined;
}

//is: 상태를 확인해서 맞으면 트루 틀리면 펄스
function moveSlideCb(n) {
    if(slides.is(':animated')){
        return;
    }
    slides.stop().animate({
        left: moveAmt * -n
    }, 650, function () {
        if (currentIdx > slideCount) {
            slides.css('left', 0);
            currentIdx = 0;
            //콜백함수 -> 애니메이트 한 다음 또다른 함수를 실행하는 것
        } else if (currentIdx < -(slideCount - 1)) {
            slides.css('left', -moveAmt * slideCount);
            currentIdx = slideCount;
        }
    });
    currentIdx = n;
    console.log(currentIdx);
    console.log(slideCount);
}

//이벤트 핸들러 작성
slideWrapper.on({
    mouseenter: function () { stopSlide() }, //요소에 진입했을 때
    mouseleave: function () { autoSlide() }, //요소를 나갔을 때
});

nextBtn.on('click', function () {
    moveSlideCb(currentIdx + 1);
});
prevBtn.on('click', function () {
    moveSlideCb(currentIdx - 1);
    console.log(currentIdx);
});

$(window).resize(function () { //.resize 크기가 변경되면 실행할 것
    let winWidth = $(this).width();
    if (winWidth < 900) {
        responsiveGap = 10;
        responseWidth = ((slides.width() - (responsiveGap * (maxSlides - 1))) / maxSlides);
        console.log(responseWidth);
    } else {
        responseWidth = slideWidth;
        responsiveGap = slideGap;
    }
    if (winWidth <= 500) {
        responseWidth = slides.width();
        responsiveGap = 0;
    }
    slideLayout(responseWidth, responsiveGap);
    setSlidePos();
})