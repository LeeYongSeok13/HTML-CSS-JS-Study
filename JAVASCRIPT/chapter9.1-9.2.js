/* 9 장 (9.1 ~ 9.2) */
/* 변수 */

/* 호이스팅 - 선언부와 할당을 나누어서, 선언부를 최상위로 끌어올리는 행위 var은 가능, let은 불가능 */

var num1;
console.log(num1);
num1 = 10;

/* var 중복될 수 있음, let 중복될 수 없음 */

let num2 = 20;
console.log(num2);

/* const 재할당 불가능, 선언과 동시에 할당해야함 */ 
const num3 = 30;
console.log(num3);

/* 자료형 */

let str = 'Hello';
console.log(str);

/* 문자열은 큰따옴표 또는 작은따옴표로 정리한다. */ 
// 1. 문자열 연결 연산자
let str1 = '문자열은 큰따옴표("") 또는 작은따옴표(' + "'')로 정의합니다.";
console.log(str1);

// 2. 이스케이프 문자
let str2 = '문자열은 큰따옴표("") 또는 작은따옴표(\'\')로 정의합니다.'
console.log(str2);

// 3. 템플릿 문자열
const msg = `문자열`;
let str3 = `${msg}
은 큰따옴표("") 또는 작은따옴표('')로 정의합니다.`
console.log(str3);

const num = (0.1 * 10 + 0.2 * 10 ) / 10 ; // 숫자형
console.log(num);

const bool = 30 === 30; // 논리형
console.log(bool);

// undefined는 변수를 선언하고, 할당을 하지 않은 형태이지만, null은 의도적으로 비어있음
let num4 = null;
console.log(num4);

// 하나의 데이터에 여러개를 묶어서 표현(배열)
let num5 = [10, 20,'a'];
console.log(num5[2]);