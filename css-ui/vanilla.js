/* es6(에크마 식스) */
let hamMenuIcon = document.getElementById("ham-menu");
// 아이디를 가지고 와서 할당하다.
let navBar = document.getElementById("nav-bar");
// let navLinks=document.querySelector("li"); <-하나만 선택.
let navLinks = document.querySelectorAll("li"); /* All을 써야 단체를 가져 올 수 있다. */

hamMenuIcon.addEventListener('click', function () {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
}) /* 선택된 요소에게 이벤트가 되는지 감지하고 실행한다./ 펑션은 기능/ 클래스를 조작할 수 있는 것. */

// 자바 스크립트에서 데이터가 여러개(배열, 객체)일때는 반복문(로테이션)/ 배열의 데이터를 하나씩 꺼내 순회하는 함수/ ()안에 아무거나 써서 그릇을 만들면 된다.
navLinks.forEach(function (x) {
    x.addEventListener('click', function () {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    })
});