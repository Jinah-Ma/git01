$('.box1').animate({left: '500px', width: 200, height: '200px'},1000, 'linear').animate({left: '0px', width: 50, height: '50px'},1000, 'linear');
//{}안에 애니메이션 효과로 줄 수 있는 것 중 숫자로 바꿀 수 있는 것들을 다 넣을 수 있다.(글자는 다음번에)

$('.box2').delay(2000).animate({left:'300px'}, 2000, 'easeInCubic').animate({left:'0'}, 2000, 'easeInCubic').animate({left:'300px'}, 2000, 'easeInCubic');