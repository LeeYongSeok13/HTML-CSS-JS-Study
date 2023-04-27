/* 9.3 연산자 */
let num1 = 10 % 3; // % 나머지
console.log(num1)

let num2 = 2 ** 3; // ** 제곱
console.log(num2);

let num3 = 1;
// 전치: ~전에(할당하기 전에 증가시켜라)
// 후치: ~후에(할당한 후에 증가시켜라)
num3++;
console.log(num3);

let num4 = 1;
num4 = -num4;
console.log(num4);

/* 복합 대입 연산자 */
let num5 = 10;
num5 += 2; // num5 = num5 + 2;
console.log(num5);

let num6 = 10;
num6 -= 5; // num6 = num6 - 5;
console.log(num6);

let num7 = 10;
num7 **= 2;
console.log(num7);

/* 비교 연산자 */
let num8 = 10;
let num9 = 20;
let result1 = num1 < num2;
console.log(result1); // 최종적으로 논리형이 나온다.

let num10 = 10;
let strNum1 = '10';
let result2 = num10 == strNum1; // == : 서로 다른 자료형을 형 변환하는 비교연산자
console.log(result2);

let num11 = 10;
let strNum2 = '10';
let result3 = num11 === strNum2; // === : 자료형까지 비교하는 일치연산자 
console.log(result3);

/* 논리 연산자 */ 
// && : and 연산자, || : or 연산자
let result4 = true && false; // 하나라도 거짓이 있으면 거짓
console.log(result4);

let result5 = true || false; // 둘중 하나라도 참이면 참
console.log(result5);

let result6 = !(false || false); // false인 결과를 부정함
console.log(result6);

/* 삼항 연산자 */
let result7 = 10 < 20 ? '참입니다.' : '거짓입니다.';
console.log(result7);

// 연산자 우선순위 
let result8 = 10 + 10 * 3;
console.log(result8);

let result9 = (10 + 10) * 3; // ()가 있으면 우선 연산
console.log(result9);