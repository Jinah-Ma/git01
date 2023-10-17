$(() => {
    // 변수지정
    const slideWrapper = $('.slide_wrapper');
    const slides = slideWrapper.find('.slides');
    const slide = slides.find('li');
    const slideCount = slide.length;
    let currentIdx = 0;
    const slideWidth = slide.width(); /* li의 너비 */
    const slideMargin = 30; /* li의 간격값 */
    let moveAmt; /* 너비와 간격을 합한 값을 할당하여 움직일 거리 */
    let maxSlides = 3; /* 한번에 보여줄 갯수 */
    let newSlides; /* 복제한 요소를 새로 저장할 변수 */
    let newSlidesWidth; /* 바뀐 너비값 */
    let timer = undefined;

    slide.clone()
    slides.append(slide.clone().addClass('clone')); //뒤
    slides.prepend(slide.clone().addClass('clone')); //앞


    //슬라이드 가로배치 함수
    function slideLayout(sw, sm) {
        newSlides = $('.slide_wrapper li');
        moveAmt = sw + sm;
        newSlides.each(function (i) {
            console.log(i); //인덱스번호
            $(this).css({ left: moveAmt * i, width: sw });
        });
    }
    slideLayout(slideWidth, slideMargin);

    //슬라이드 중앙정렬
    function setSlidePos() {
        const ulMoveAmt = -(slideWidth + slideMargin) * slideCount;
        console.log(ulMoveAmt);
        slides.css({ transform: `translateX(${ulMoveAmt}px)` }); //단위 꼭 쓰기
    }
    setSlidePos();

    //슬라이드 이동함수
    function moveSlide(num) {
        moveAmt = slideWidth + slideMargin;
        slides.stop().animate({ left: - moveAmt * num }, 500,
        )
    }

    //오토플레이
    autoPlay();
    function autoPlay() {
        if (timer == undefined) {
            timer = setInterval(() => {
                currentIdx++;

                if (currentIdx == slideCount) {
                    currentIdx = 0;
                }

                moveSlide(currentIdx);
            }, 500);
        }
    }

    //정지함수
    function stopPlay() {
        clearInterval(timer);
        timer = undefined;
    }

    slideWrapper.on({
        mouseenter: function () { stopPlay() },
        mouseleave: function () { autoPlay() },
    });
    //컨트롤

    //페이저

    //반응형
})