$(function(){
    $('#wrap').fullpage({
        // 앵커기능 : 각 섹션으로 이동하게 해준다.
        anchors:["section1", "section2", "section3", "section4"],
        sectionsColor:["#ff0000","purple","yellow","pink"],
        navigation:true,
        navigationPosition:'right',
    })
});
// 높이가 생긴다. 100vh로 잡힌다.(도큐먼트 레디가 이걸로 바뀌었다.★)