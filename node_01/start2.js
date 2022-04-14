/* 
변수의 선언 키워드 : var, const, let
var : java에서 static 변수 선언
const : 불변 변수 java에서 final 변수 선언하기
let : 일반적인 변수
      js에서는 변수의 type을 지정하지 않는 변수에 대한 문제가 발생 할 수 있다
      동적 type 변수
*/

var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

var num = "Korea";
// let num1 = "Republic of Korea";

console.log(num1);

intNum = 100;
console.log(intNum);

for (let i = 0; i < 10; i++) {}
// console.log(i); let키워드로 선언된 변수는 선언 { } 을 벗어나면 소멸된다

// var 키워드로 선언된 변수는 public static 이므로 가급적 사용 X
for (var j = 0; j < 10; j++) {}
console.log(j);

// 변수값을 이후에 변경해야 하는 경우에는 const를 사용 X
// for (const i = 0; i < 10; i++) {}
