$(() => {
    // $('#crossfade li').eq(0).show(); 아래와 같다.

    //method chaining(매서드 체이닝)
    $('#crossfade li').hide().filter(':first').show(); //걸러준다. / 두번 쓸 것을 한 줄로 줄였다.

    //콜백함수, 일정시간마다
    setInterval(slideshow, 3000);

    function slideshow() {
        $('#crossfade li:first-child').fadeOut('slow');
        $('#crossfade li:first-child').next().fadeIn('slow');
        $('#crossfade li:first-child').appendTo('#crossfade'); //요소추가 메서드, 뒤에다 첫째를 추가함. 그래서 순환이 된다.
    }
    //지정 시간에 따라 함수 호출하기
    //1.일정시간이후
    //2.일정시간마다

    //페이저 추가
    let newText;
    $('#crossfade li').each(function(idx){
        // console.log(idx, $(this));
        let oldText = $(this).find('p').text();
        // console.log(oldText);
        newText = oldText + (idx + 1);
        // console.log(newText);
        $(this).find('p').text(newText);
    })
})