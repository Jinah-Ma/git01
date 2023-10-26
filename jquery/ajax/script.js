const pics = $(".pic");
const lightbox = $("#lightbox");
const lightImg = $("#lightImage");

pics.on('click', function () {
    const bigLocation = $(this).attr('data-scr');

    lightImg.load(bigLocation);
    lightbox.css('display', 'block');

    /* 로컬실행방식으로 사용하면 안 됨. 라이브 서버로 실행해야 됨. 주소에 드라이브 주소가 있으면 안 된다는 얘기 */

    $(html).addClass('all_scrollFixed');
})

lightbox.on('click', function (){
    lightbox.css('display', 'none');
    $(html).removeClass('all_scrollFixed');
})