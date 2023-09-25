let pics = $('.pic');
const lightbox = $('#lightbox');
const lightImg = $('#lightboximg');

pics.on('click', function(){
    // attr('기본 속성 하나 넣어야 함. 자바스크립트와 다른 점')

    /* 가져와 attr('속성') */
    /* 바꿔 attr('속성', '바꿀 속성') */
    const big = $(this).attr('data-src');
    lightImg.attr('src', big);
    lightbox.css('display', 'block');
    $('html').addClass('on');
})

lightbox.on('click', function(){
    lightbox.css('display', 'none');
    $('html').removeClass('on');
});