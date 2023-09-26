// $(function(){})
// $(() => {}) 위 아래 같은 표현
// document.addEventListener('DOMContentLoaded' ()=>{})자바의 이것과 같은 소리. 함수를 다 읽고 실행하는 것.

$(function () {
    $('p:first-child').css('color', 'green');
    $('.blue').css('color', 'blue');


    //2
    let list1 = $('#list1 li'); /* 제이쿼리는 알아서 돌려줌 */
    /* 제이쿼리에서 반복문을 돌릴때에는 위치가 다르고 떨어져 있는 것들에 쓰는 것이 좋다.(부모가 같은 애들은 알아서 돈다.) */
    list1.each((idx, el) => { /* 자바와 반대다. */
        let oriText = $(el).text();
        const newText = oriText + idx + 'text()로 추가';
        $(el).text(newText);

        //3
        $(el).addClass(`a${idx}`); /* 클래스 추가 */
        $(el).css('margin-left', `${idx}px`); /* 계단식 */
    });

    //4
    let list2 = $('.theObj');
    /* html()취득/ html('값') 값으로 바꿈 */
    /* attr('속성')취득/ attr('속성', '값') 값으로 바꿈 */
    list2.html(`<span>${Math.random()}</span>`)/* 난수 생성기 */

    list2.attr('data-set', 'accessbillity'); /* 접근성, 얻어오기 */

    $('#list2').attr('class', list2.attr('class')); /* 얻어온 값을 다른 곳에 집어넣기/ 어떤 속성을 어떻게 할 것인가 */


    //5 돔 요소 조작
    const list3 = $('#list3');
    const li = `<li>추가함</li>`
    list3.children().eq(2).after(`${li}`);
    list3.prepend(`첫째${li}`);
    list3.append(`마지막${li}`);


    const list3Lis = $('#list3 li');
    list3Lis.eq(4).before(`네 앞에${li}`);
    list3Lis.eq(4).after(`네 뒤에${li}`);
})

