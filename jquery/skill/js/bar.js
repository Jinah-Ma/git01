$(function () {
    const progressWrap = $('.progress-bar');
    const animationOST = $('.animation').offset().top - 600;
    let isAni = false;

    $(window).on('scroll', function () {
        //윈도우의 스크롤 탑 값이 애니메이션OST값보다 크거나 같고, isAni의 값이 false면 조건문 실행
        //=>윈도우의 스크롤바가 스킾바 섹션 안으로 진입했고 애니메이션은 미실행 상태
        if ($(window).scrollTop() >= animationOST && !isAni) {
            progressAnimation();
        }
    });
    //막대 채우기
    function progressAnimation() {
        progressWrap.each(function (i, o) { //인덱스번호, 요소(this와 같음)
            const $this = $(this);
            const progressBar = $this.find('.bar');
            const progressText = $this.find('.rate');
            const progressRate = progressText.attr('data-rate');
            // console.log(progressRate);

            progressBar.stop().animate({ width: progressRate + '%' }, 2500);
            //뒤에 단위를 쓰면 픽셀이 퍼센트로 바뀐다.

            //글자 카운트
            const textFn = function () { //익명함수라서 선언한 다음에 호출해야 한다.
                $({ rate: 0 }).stop().animate(
                    { rate: progressRate },
                    {
                        duration: 2000,
                        progress: function () {
                            let now = this.rate;
                            // console.log(now);
                            progressText.text(Math.floor(now) + '%');
                            //Math.floor(now) 뒷 소숫점 버린다.
                        },
                        complete : function(){
                            isAni = true;
                        } //진행되고 난 뒤의 할일
                    }
                );
            };
            textFn();
        })
    }

})