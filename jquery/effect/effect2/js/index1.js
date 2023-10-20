let winH = $(window).height();
const sections = $('section');
$(window).on('scroll', function () {
    let winSct = $(this).scrollTop() + winH * 0.9;
    sectionAni(winSct);
})

function sectionAni(n) {
    sections.each(function (i) { //each : 요소들 각각의 값을 계산해야 되는 것들
        // sections.eq(i).offset().top
        // console.log(sections.eq(i).offset().top);
        
        //console.log($(this).offset().top);
        let sct = $(this).offset().top; //이것과 같다. 순회를 하는 것들에 쓴다.

        const delay = $(this).data('delay');
        // console.log(delay);

        if(n > sct){
            if(delay === undefined){
                console.log("parallax");
            }else{
                setTimeout(() => {
                    $(this).addClass('sectionIn');
                }, delay); //언제 시작할 것인지
            }
        }
    })
}