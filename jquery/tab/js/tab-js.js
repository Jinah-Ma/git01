$(() => {
    const tadWrapper = $('.tad-wrapper');
    tadWrapper.each(function () {
        let currentEl = $(this); //this = 윈도우
        const targetLink = currentEl.find('.tab-menu a');
        const tabContent = currentEl.find('.tab-content>div');

        targetLink.on('click', function (e) {
            e.preventDefault();
            let tg = $(this); //위 this랑 다름. 타겟된 a태그 셋
            let currentLink = tg.attr("href");
            console.log(currentLink); //아이디 탭 속성이 반환된다.
            tabContent.hide();
            $(currentLink).show();
            
            targetLink.removeClass('active');
            tg.addClass('active');
        })

    }) /* 반복적으로 사용가능 */
})