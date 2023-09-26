$(() => {
    console.log($('.gnb>li'));
    $('.gnb>li').on('click', function () {
        /* this 는 객체 자기자신을 가리킨다. */
        let tg = $(this);
        let subH = $('.sub>li').innerHeight();
        /* 서브메뉴의 높이를 서브 메뉴의 길이(서브메뉴의 갯수)마다 다르게 설정 */
        let subLen = tg.find('li>a').length;
        let subTH = subH * subLen;

        // 다 끄고
        $('.sub').removeClass('on').innerHeight(0);
        // 한개만 킨다.
        tg.find('.sub').addClass('on').innerHeight(subTH);
    })
});