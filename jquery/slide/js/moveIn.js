$(() => {
    //슬라이드 요소
    const visual = $('#mainVisual>ul>li');
    const btnList = $('.btnlist li');

    const prevBtn = $('.btnImg .left');
    const nextBtn = $('.btnImg .right');
    
    let current = 0;
    let setIntervalId;

    const counterEl = '<div class="counter">1'; //알아서 닫힌채로 집어넣어진다.

    $('#wrap').append(counterEl);
    let counter = $('.counter');
    counter.css({ textAlign: 'center', fontSize: '2em' });


    timer();
    // 일정시간마다 실행-인덱스번호를 카운트
    function timer() {
        setIntervalId = setInterval(() => {
            let prev = visual.eq(current); //#mainVisual>ul>li[0]
            let pagerprev = btnList.eq(current);
            slideMove(prev, 0, '-100%'); // tg, start, end (스타트에서 엔드로 자리를 이동해라.)
            pagerprev.removeClass('on');
            current++; //가진 이미지 갯수 보다 카운터의 숫자가 커지는 것을 막아야 한다.
            if (current === visual.length) {
                current = 0;
            }
            // 0자리가 아직 비어있다.
            let next = visual.eq(current);
            let pagernext = btnList.eq(current);
            slideMove(next, '100%', 0); // 0자리를 채워줌 (스타트에서 엔드로 자리를 이동해라.)
            pagernext.addClass('on');
            cnt(current + 1);
        }, 2000);
    }
    //카운팅하는 함수
    function cnt(n) {
        counter.html(`${n}`);
    }


    //움직이는 함수
    function slideMove(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500, 'easeOutCubic');
    }

    // #mainVisual 호버시 정지
    $('#mainVisual, .btnlist, .left, .right').on({
        mouseover: function () { clearInterval(setIntervalId); },
        mouseout: function () { timer(); },
    });


    //버튼 리스트 클릭시 함수
    btnList.on({
        click: function () {
            let tg = $(this);
            let i = tg.index();
            btnList.removeClass('on');
            tg.addClass('on');
            pagerMove(i); //호출한다.
            cnt(i + 1);
        },
    })

    //움직이는 함수
    function pagerMove(i) {
        if (current == i) {
            return; //선택시마다 움직이는 것을 멈춰준다.
        }
        let currentEl = visual.eq(current); //0
        let nextEl = visual.eq(i);
        currentEl.css({ left: 0, top: 0 }).stop().animate({ left: '-100%' }, 500, 'easeOutCubic');
        nextEl.css({ left: '100%', top: 0 }).stop().animate({ left: '0%' }, 500, 'easeOutCubic');
        current = i; // i값으로 만들어 준다.
    }

    //next 클릭시 움직이는 함수
    nextBtn.on('click', function () {
        let prev = visual.eq(current);
        let pagerprev = btnList.eq(current);
        slideMove(prev, 0, '-100%');
        pagerprev.removeClass('on');
        current++;
        if (current === visual.length) {
            current = 0;
        }
        let next = visual.eq(current);
        let pagernext = btnList.eq(current);
        slideMove(next, '100%', 0);
        pagernext.addClass('on');
        cnt(current+1);
    });

    //prev 클릭시 움직이는 함수
    prevBtn.on('click', function () {
        let prev = visual.eq(current);
        let pagerprev = btnList.eq(current);
        slideMove(prev, 0, '100%');
        pagerprev.removeClass('on');
        current--;
        if (current < 0) {
            current = visual.length - 1;
        }
        let next = visual.eq(current);
        let pagernext = btnList.eq(current);
        slideMove(next, '-100%', 0);
        pagernext.addClass('on');
        
        cnt(current+1);
    });

})