/* es6(에크마 식스) */
let hamMenuIcon=$('#ham-menu');
// 아이디를 가지고 와서 할당하다.
let navBar=$("#nav-bar");

let navLinks=$("li");


hamMenuIcon.click(function(){
    navBar.toggleClass('active'); /* 자바스크립트것을 제이쿼리로 바꿨기 때문에 먹히지 않아 제이쿼리 명령어를 써야 한다. */
    hamMenuIcon.toggleClass("fa-times");
});

