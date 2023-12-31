//리팩토링 - 검토해서 좀더 나은 것으로 교체한다.

//변수 초기화
const win = $(window);
const gnb = $('.gnb li');
const sections = $('.section');
const sideNav = $('.sideNav >li');

//gnb
gnb.on({
    /*     mouseover: function (e) { //마우스가 요소 위에 올라왔을때 할 일
            e.preventDefault();
            $(this).addClass('on'); //어떤 것에 올라갈지 모르기 때문에 this를 쓴다.
    
        },
        mouseout: function (e) {
            e.preventDefault();
            $(this).removeClass('on');
        }, */
    click: function () {
        let tg = $(this);
        let index = tg.index();
        let section = sections.eq(index); //요소를 선택한다.
        let offset = section.offset().top; //속성을 가져온다.
        $('html, body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
    },
})

//sideNav
sideNav.on({
    click: function () {
        let tg = $(this);
        let index = tg.index();
        let section = sections.eq(index); //요소를 선택한다.
        let offset = section.offset().top; //속성을 가져온다.
        $('html, body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
    },
})

//이벤트 스크롤 상단메뉴 스티키
win.on('scroll', function () {
    let sct = win.scrollTop();

    //li들의 서로 다른 값을 얻으러면 이치문을 써야 함.
    sections.each(function (i) {
        // console.log(sections.eq(i).offset().top);
        if (sct >= sections.eq(i).offset().top - 300) {
            gnb.eq(i).addClass('on').siblings().removeClass('on');
            //siblings()형제요소 //top - 300(스피드 속도값을 빼서 타이밍을 좀더 빠르게)
            sideNav.eq(i).addClass('on').siblings().removeClass('on');
            sections.eq(i).addClass('on').siblings().removeClass('on');
            //전부 다 연결시킴. 클래스는 on으로 통일해야 된다. 숫자도 같아야 함.
        }
    });

    /* if(sct > 400){
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    } */
    //삼항연산자. 조건 ? 진실일때 할 일 : 거짓일 때 할 일
    sct > 400 ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');

});

