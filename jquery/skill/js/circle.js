//js
const len = document.querySelector('svg circle').getTotalLength();
console.log(len); //628

//jq
$(function () {
    const progressWrap = $('.charts .chart');
    const animationOST = $('.charts').offset().top - 600;
    let isAni = false;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= animationOST && !isAni) {
            progressAnimation();
        }
    });

    //막대 채우기
    function progressAnimation() {
        progressWrap.each(function (i, o) {
            const $this = $(this);
            const progressBar = $this.find('circle');
            const progressText = $this.find('h2');
            const progressRate = progressText.attr('data-num');


            progressBar.stop().animate({ width: progressRate + '%' }, 2500);

            const textFn = function () {
                $({ rate: 0 }).stop().animate(
                    { rate: progressRate },
                    {
                        duration: 2000,
                        progress: function () {
                            let now = this.rate;
                            // console.log(now);
                            progressText.text(Math.floor(now) + '%');
                        },
                        complete: function () {
                            isAni = true;
                        }
                    }
                );
            };
            textFn();
        })
    }

})