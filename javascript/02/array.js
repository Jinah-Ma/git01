 // 생성
 let srt = [];
 srt = '안녕하세요'; /* 변수 값 초기화 */
 document.write(`${srt[1]}<br>`) /* '녕'만 꺼내고 싶을 때, 그것의 인덱스번호(녕 = 1)를 쓰면 추출이 된다. */
 document.write(`${srt[1 + 1]}<br>`) /* 산술 연산식도 가능 */
 document.write(`${srt[srt.length - 1]}<br>`) /* 마지막 번째를 부를 수 있다. */
 console.log(srt.length); /* length 배열이 갖고 있는 속성/ 함수x : 요소의 총 길이를 반환/ length는 1부터 시작(인덱스는 0부터 시작) */
 document.write(`${srt[4]}<br>`)

 const array = [234, "String", true, function () { }, {}, [256, 789]]
 console.log(array)
 let arr = [];
 arr[0] = 'zero';
 arr[2] = 'two';
 console.log(arr[1]);


 let arr1 = [, , ,];

 let arr2 = new Array('강아지', '고양이') /* array : 내장 객체 */
 console.log(arr2);