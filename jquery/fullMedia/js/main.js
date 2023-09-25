$(() => {
    //문서를 다 읽고 실행해.(페이지 로드 및 리로드-새로고침-)
    /* video, main-video(부모), window(가로, 세로 크기) */
    const win = $(window);

    // 윈도우 높이, 너비
    let winH = win.innerHeight();
    let winW = win.innerWidth();
    console.log(winH, winW);

    const vid = $('#mainVideo');
    // const vidwrap = $('.main-video')

    // 비디오 높이, 너비
    let vidH = vid.innerHeight();
    let vidW = vid.innerWidth();
    console.log(vidH, vidW);

    const vidwrap = vid.parent('.main-video'); /* 위의 부모 선택과 같다. */


    videoResizeFn();
    $(window).resize(function () { /* 창의 크기가 변경될때 */
        console.log('😊');
        videoResizeFn();
    })

    /* 가변미디어 함수 */
    function videoResizeFn() {
        winH = win.innerHeight(); /* 재할당 */
        winW = win.innerWidth();
        vidH = vid.innerHeight();
        vidW = vid.innerWidth();


        console.log('윈도우:' + winH, winW);
        console.log('비디오:' + vidH, vidW);

        vidwrap.css({ width: '100%', height: winH }); /* 여러개 쓸 경우에 */

        /* 창크기와 미디어크기 맞추기 */
        
        /* 화면의 높이가 세로폭일때 */
        if (winH > vidH) {
            vid.css({ width: 'auto', height: winH });
            // video정렬
            vid.css({ left : '50%', top : '50%', transform: 'translate(-50%, -50%)' });
        }

        /* 화면의 높이가 가로폭일때 */
        if (winW > vidW) {
            vid.css({ width: winW, height: 'auto' });
            // video정렬
            vid.css({ left : '50%', top : '50%', transform: 'translate(-50%, -50%)' });
        }
    }
});
/* 윈도우의 높이가 미디어높이보다 큰 경우 : 비디오의 높이를 윈도우 폭에다 맡춘다. -> 너비가 커지기 때문에 우측이 잘리므로, 정렬을 가운데로 맞춘다.(1. 마진 사용-윈도우 너비에 비디오 너비를 빼고 나누기2를 해서 그만큼을 보내기-, 2. 트렌스폼의 트렌스레이트 50%주기) */