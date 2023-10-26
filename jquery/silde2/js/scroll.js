const win = $(window);
const sections = $('section');
const speed = Math.floor(win.height() * 0.9);
//소숫점 버리기
let winSCT;
let topArr = [];

// sections.each(()=>{}); 각각
//화살표 함수에는 this가 윈도우를 가르키므로 쓰지 말자
sections.each((i, section) => {
    //값을 돌려준다.
    setTimeout(() => {
        //일정시간 이후에 실행해주는 함수
        $(section).addClass(`bg${i + 1}`);
    }, i * 1000);

    const sectionTop = $(section).offset().top;
    topArr.push(sectionTop)
    //하나의 배열에 값을 추가할때
});

win.on('scroll', () => {
    winSCT = win.scrollTop();
    if (winSCT > topArr[0]) {
        sections.eq(0).find('.box').css('transform', 'translateX(0%)');
    }
    if (winSCT > topArr[1] - speed) {
        sections.eq(1).find('.bg3').stop().delay(0).animate({ top: '50%', opacity: 1 }, 500, 'swing');
        sections.eq(1).find('.bg4').stop().delay(200).animate({ top: '30%', opacity: 1 }, 800, 'swing');
        sections.eq(1).find('.bg5').stop().delay(400).animate({ top: '10%', opacity: 1 }, 1000, 'swing');
    }
    if (winSCT > topArr[2] - speed && winSCT < topArr[3]) {
        sections.eq(2).addClass('is-animated').siblings().removeClass('is-animated');;
    }

    if (winSCT > topArr[3] - speed) {
        sections.eq(3).addClass('is-animated');
        pipScroll();
    }
    if (winSCT > topArr[4] - speed) {
        sections.eq(4).addClass('is-animated');
        pipScroll();
    }
    /* 복사하고 if문도 복사해 수정하면 된다. */

    //circle
    if (winSCT > topArr[5] - speed) {
        if (!sections.eq(5).hasClass('is-animated')) {
            circleChart();
            sections.eq(5).addClass('is-animated');
        }
    }
    if (winSCT > topArr[6] - speed) {
        if (!sections.eq(6).hasClass('is-animated')) {
            barChart();
            sections.eq(6).addClass('is-animated');
        }

    }
})

/* sections.each(function(i, section) {
    //값을 돌려준다.
    setTimeout(() => {
        //일정시간 이후에 실행해주는 함수
        $(section).addClass(`bg${i + 1}`);
    }, i * 1000);

    const sectionTop = $(this).offset().top;
    console.log(sectionTop);
}); */

// 마스크 높이, .screen 높이, 둘을 뺀 값

function pipScroll() {
    /* 목업이 추가 되면 디바이스에 할당 */
    const devices = $('.mockup.pc, .mockup.mobile');
    devices.each(function (i, deviceEl) {
        let device = $(this);
        let screen = device.find('.mask>img');
        let mask = device.find('.mask');
        let heightDifference = screen.innerHeight() - mask.innerHeight();
        device.data('heightDifference', heightDifference);
        device.on({
            mouseenter: function () {
                screen.stop().animate({ top: -heightDifference }, 1000)
            },
            mouseleave: function () {
                screen.stop().animate({ top: 0 }, 1000)
            }
        })
    })
}
win.on('resize', function () {
    pipScroll();
})
/* 사이즈가 바뀔때 한번더 호출하면 새로 초기화가 되어 적용된다. */


function circleChart() {
    /* 선 길이 알아내는 함수 */
    let path = Math.floor(document.querySelector('circle').getTotalLength());


    const chart = $('.chart');
    chart.each(function () {
        const item = $(this);
        const title = item.find('h2');
        const tgNum = title.attr('data-num');
        const circle = item.find('circle');

        $({ rate: 0 }).stop().animate({ rate: tgNum }, {
            duration: 1500, //지속시간
            progress: function () {
                let now = this.rate;
                let amount = path - (path * now / 100);
                title.text(Math.floor(now));
                circle.css({ strokeDashoffset: amount });
            }
        });
    })
}

/* bar */
function barChart() {
    let path = Math.floor(document.querySelector('line').getTotalLength());


    const bar = $('.bar');
    bar.each(function () {
        const item = $(this);
        const title = item.find('h2');
        const tgNum = title.attr('data-num');
        const line = item.find('line');

        $({ rate: 0 }).stop().animate({ rate: tgNum }, {
            duration: 1500, //지속시간
            progress: function () {
                let now = this.rate;
                let amount = path - (path * now / 100);
                title.text(Math.floor(now));
                line.css({ strokeDashoffset: amount });
            }
        });
    })
}