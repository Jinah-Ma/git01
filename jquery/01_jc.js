document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('p').style.color = 'green'; /* 첫번째 아이를 선택해 바꾼다. */
    document.querySelector('.blue').style.color = 'blue'; 

    // 2
    let list1 = document.querySelectorAll('#list1 li');
    console.log(list1);
    list1.forEach((el, idx) => { /* 요소의 값 (순회), 요소의 (배열)번호★ 일정한 값을 이용해야 할 경우에 아주 많이 쓴다. */
        el.textContent += `🐶${idx}😊textContent로 추가`;

        //3
        el.classList.add(`a${idx}`) /* 클래스 추가 메서드 */
        el.style.marginLeft = `${idx}px` /* 계단식으로 마진이 들어간다. */
    })
    
    //4
    let list2 = document.querySelector('.theObj');
    list2.innerHTML = `<span>${Math.random()}</span>` /* 난수 생성기 */
    list2.setAttribute('data-set', 'accessbillity'); /* 접근성 */
    console.log(list2.getAttribute('class')); /* 값을 얻어옴 */
    
    document.querySelector('#list2').setAttribute('class', list2.getAttribute('class')); /* 얻어온 값을 다른 곳에 집어넣기/ 어떤 속성을 어떻게 할 것인가 */

    //5 돔 요소 조작
    const list3 = document.querySelector('#list3');
    list3.innerHTML += `<li>innerHTML로 추가-list6</li>`

    const li = `<li>추가함</li>`
    //위치 특정 추적 조작 (슬라이드★★))
    list3.insertAdjacentHTML('afterbegin', `$[afterbegin]${li}`); /* 위치, 추가할 요소 */
    list3.insertAdjacentHTML('beforeend', `$[afterbegin]${li}`); /* 위치, 추가할 요소 */

    const list3Lis = document.querySelectorAll('#list3 li');
    list3Lis[4].insertAdjacentHTML('beforebegin', `${li}`); 
    list3Lis[4].insertAdjacentHTML('afterend', `${li}`); 

    /* afterbegin으로 추가: 선택한 것의 첫번째 자식으로 들어감/beforeend: 마지막 자식으로 생성들어감/ beforebegin : 선택한 자식의 앞쪽으로 들어감/ afterend:선택한 자식의 뒤에 */

}) /* 함수가 실행되는 시점을 제어/ DOMContentLoaded : 다 읽고 실행 */
// 1. 요소 선택기를 확인하기/ 2. 코드를 읽고 해당 코드를 바꾸기
