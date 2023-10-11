$(() => {
    //슬라이드 요소
    const visual = $('#mainVisual>ul>li');
    const btnList = $('.btnlist li');
    let current = 0;
    let setIntervalId;

    timer();
    // 일정시간마다 실행-인덱스번호를 카운트
    function timer() {
        setIntervalId = setInterval(() => {
            let prev = visual.eq(current); //#mainVisual>ul>li[0]
            slideMove(prev, 0, '-100%'); // tg, start, end (스타트에서 엔드로 자리를 이동해라.)
            current++; //가진 이미지 갯수 보다 카운터의 숫자가 커지는 것을 막아야 한다.
            if (current === visual.length) {
                current = 0;
            }
            // 0자리가 아직 비어있다.
            let next = visual.eq(current);
            slideMove(next, '100%', 0); // 0자리를 채워줌 (스타트에서 엔드로 자리를 이동해라.)
        }, 2000);
    }

    //움직이는 함수
    function slideMove(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500, 'easeOutCubic');
    }

    // #mainVisual 호버시 정지
    $('#mainVisual, .btnlist').on({
        mouseover : function () {clearInterval(setIntervalId);},
        mouseout : function () {timer();},
    });


    //버튼 리스트 클릭시 함수
    btnList.on({
        click : function(){
            let tg = $(this);
            let i = tg.index();
            btnList.removeClass('on');
            tg.addClass('on');
            pagerMove(i); //호출한다.
        },
    })

    //움직이는 함수
    function pagerMove(i) {
        if(current == i){
            return; //선택시마다 움직이는 것을 멈춰준다.
        }
        let currentEl = visual.eq(current); //0
        let nextEl = visual.eq(i);
        currentEl.css({left : 0, top : 0}).stop().animate({left : '-100%'}, 500, 'easeOutCubic');
        nextEl.css({left : '100%', top : 0}).stop().animate({left : '0%'}, 500, 'easeOutCubic');
        current = i; // i값으로 만들어 준다.
    }
})