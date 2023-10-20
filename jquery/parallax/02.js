const sections = $('section');
const win = $(window);
const speed = Math.floor(win.height() * 0.9);
let topArr = [];
let winSCT;
//섹션별 offset().top 구하는 함수
sections.each(function (i, o) {
	const sectionTop = $(o).offset().top;
	topArr.push(sectionTop);
});
//윈도우 스크롤 이벤트함수
win.on('scroll', function () {
	winSCT = win.scrollTop();
	console.log(topArr);
  //sec1
	if (winSCT > topArr[0] && winSCT < topArr[1]) {
		sections.eq(0).find('.bg2').stop().delay(0).animate({ top: '10%', opacity: 1 }, 500, 'swing');
		sections.eq(0).find('.bg3').stop().delay(200).animate({ top: '0%', opacity: 1 }, 700, 'swing');
		sections.eq(0).find('.bg4').stop().delay(300).animate({ top: '-10%', opacity: 1 }, 900, 'swing');
	}
  //sec2
	if (winSCT > topArr[1]-speed && winSCT < topArr[2]) {
		sections.eq(1).find('.bg2').stop().delay(0).animate({ top: '10%', opacity: 1 }, 1000, 'easeOutBounce');
		sections.eq(1).find('.bg3').stop().delay(200).animate({ top: '0%', opacity: 1 }, 1000, 'easeOutBounce');
		sections.eq(1).find('.bg4').stop().delay(300).animate({ top: '-10%', opacity: 1 }, 1000, 'easeOutBounce');
	}
});
