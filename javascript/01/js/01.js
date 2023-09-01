var heading=document.querySelector('#heading');
// console.log(heading); 윈도우 탐색기 콘솔창에 변수에 들어있는 값을 보여주는 것으로, 'log'+Tab키를 누르면 나온다./ 윈도우에서는 ctrl+shift+i를 누르면 바로 콘솔창이 뜬다.
heading.onclick=function(){
    heading.style.backgroundColor='red';
    heading.style.color='white';
    // heading.style.backgroundcolor='red'; x
    // heading.style.backgroundColor='red'; => 카멜케이스(단어와 단어가 붙어있는 복합문자를 쓸때 뒤에오는 문자의 앞을 대문자로 쓰는 방식)        
}

// 관리자 창을 열면 인라인 방식으로 되어있는 걸 알 수 있다.
// 식(표현식) = 모든 단어, 숫자, 기호 들을 전부 식이라 부른다./ 변수에 저장이 가능한 것./ 값을 만들어내는 모든 요소들.

// 변수 = 값을 저장할 수 있는 그릇.

// 문(문장) = 실행이 가능한 최소 명령 단위. 식이 모여서 문장을 구성. 문장 끝에는 ';'으로 문장의 종결을 표시한다.
// -조건문, 제어문, 반복문 등 다양하다./ 넓은 의미에서 문장은 식과 값을 포함하고 있다. 즉, 문장 안에 식이 들어있는 형태.

