
/*     $('.click').on('click', function(){
        alert('dd');
    }) */
//.clone(true)를 넣으면 하위들의 이벤트까지 전부 복제가 된다.(제이쿼리에서)

const transform = $('.box').clone().addClass('transform');

$('.box').addClass('margin');
const mg = $('.margin');
$('.box li').css('position', 'absolute');
mg.children('li').eq(2).animate({ height: '200px', width: '200px' }, 500)

$('body').append(transform);

$('.transform').css('position', 'relative').css('top', '300px');

// $('.transform').children('li').eq(2).css({transition: 'transform 0.5s ease', transform: 'scale(1)'}).css({ transform: 'scale(2)'}) //트렌스폼은 css로 해야 된다. 애니메이트가 안 된다.