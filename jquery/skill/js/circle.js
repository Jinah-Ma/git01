//js
const len = document.querySelector('svg circle').getTotalLength();
console.log(len); //628

//jq
$(function () {
    const progressWrap = $('.charts .chart');
    const animationOST = $('.charts').offset().top - 600;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= animationOST) {
            if (!$('.charts').hasClass('active')) {
                animationChart();
                $('.charts').addClass('active');
            }
        }
    });

    //막대 채우기
    function animationChart() {
        progressWrap.each(function () {
            const item = $(this);
            const title = item.find('h2');
            const targetNum = title.attr('data-num');
            const circle = item.find('circle');

            $({ rate: 0 }).animate(
                { rate: targetNum },
                {
                    duration: 1500,
                    progress: function () {
                        let now = this.rate;
                        let amount = 630 - (630 * now) / 100;
                        title.text(Math.floor(now));
                        circle.css({ strokeDashoffset: amount });
                    }
                }
            )
        })
    }
})