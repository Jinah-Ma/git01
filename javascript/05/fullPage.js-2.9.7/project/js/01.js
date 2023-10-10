$(function () {
    $('#wrap').fullpage({
        // 앵커기능 : 각 섹션으로 이동하게 해준다.
        anchors: ["section1", "section2", "section3", "section4"],
        sectionsColor: ["#ff0000", "purple", "yellow", "pink"],
        showActiveTooltip: true,
        navigationTooltips: ['section1', 'section2', 'section3',  'section4'],
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (obj, idx) {
            console.log('obj', obj);
            //obj = section
            console.log('idx', idx);
            //idx = index

            let activeMenu;
/*             if(destination == 1){
                $('#menu').find('li').removeClass('active');
                activeMenu = $('#menu').find('li').first().addClass('active');
            }
            if(destination == 2){
                $('#menu').find('li').removeClass('active');
                activeMenu = $('#menu').find('li:nth-child(2)').addClass('active');
            }
            if(destination == 3){
                $('#menu').find('li').removeClass('active');
                activeMenu = $('#menu').find('li:nth-child(3)').addClass('active');
            }
            if(destination == 4){
                $('#menu').find('li').removeClass('active');
                activeMenu = $('#menu').find('li:nth-child(4)').addClass('active');
            } */

            if(idx == 1){
                activeMenu = $('#menu').find('li').first();
            } else{
                activeMenu = $('#menu').find('li').eq(idx - 1);
                //eq : index번호를 선택할 수 있는 메서드(:nth)
                //index번호는 0부터 시작이므로 -1을 해준다.

                if(idx == 2){
                    $('#fp-nav').addClass('active');
                } else {$('#fp-nav').removeClass('active');}
                //불린 색깔 바꾸기
            }
            activeMenu.addClass('active').siblings().removeClass('active');
            //siblings 형제요소 메서드
        },
    })
});
// 높이가 생긴다. 100vh로 잡힌다.(도큐먼트 레디가 이걸로 바뀌었다.★)