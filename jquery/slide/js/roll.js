$(() => {
    let banner = $('.banner');
    const total = banner.children('li').length; //자식 자손을 찾는 것, find는 조건에 맞는 걸 찾는 것
    console.log(banner);
    console.log(total);

    let num = 0;
    const liW = banner.children('li').width();
    console.log(liW);

    const copyObj = banner.children('li').clone(true).addClass('copy');
    //clone(true) : 하위요소까지 복제된다.
    //next를 빼면 첫번째 이미지부터 클론되어 보여진다.
    //ul.banner너비가 560px라서 클론 3개까지만 보여진다..

    banner.append(copyObj); //배너에 더하기

    $('.next').on('click', function () {
        if(num == total){
            num = 0;
            // banner.stop().animate({'margin-left': 0}, 500)
            banner.css('margin-left', 0);
        }
        num++;
        banner.stop().animate({ marginLeft: -liW * num }, 500);
        //마진으로 움직이는 것-역방향 모션이 보여버림.
        //애니메이트 때문에 이런 현상이 발생함.
        //카멜케이스로 쓸때는 ''를 안해도 됨
        return false;
    });


    $('.prev').on('click', function(){
        if(num == 0){
            num = total;
            // banner.stop().animate({'margin-left': 0}, 500)
            banner.css('margin-left', -liW * num);
        }
        num--;
        banner.stop().animate({ marginLeft: -liW * num }, 500);
        //마진으로 움직이는 것-역방향 모션이 보여버림.
        //애니메이트 때문에 이런 현상이 발생함.
        //카멜케이스로 쓸때는 ''를 안해도 됨
        return false;
    });
});