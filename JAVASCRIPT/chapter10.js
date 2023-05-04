/* 10장 자바스크립트 함수 */

/* 함수 선언문 */
function gugudan(dan = 2) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan * i }`);
    }
}

gugudan();
gugudan(3);
gugudan(6);

/* 함수 표현식 */
/* 함수를 할당한 변수 이름으로만 표현 가능 */
const gugudanExpress = function gugudanExpress() {
    for (let i = 1; i <= 9; i++) {
        console.log(`4 * ${i} = ${4 * i }`);
    }
}

gugudanExpress();

/* 화살표 함수 */
const gugudanArrowFunc = (dan = 10) => {
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${5 * i}`);
    }
}

gugudanArrowFunc(7);
gugudanArrowFunc(); // dan의 기본값

function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

const result1 = sum(10, 20);
const result2 = sum(50, 100);

console.log(result1 + result2);

function plus() {
    let a = 10;
    console.log(`함수 내부에서 a 참조 : ${a}`);
}
plus();
// console.log(`함수 외부에서 a 참조 : ${a}`); 함수 외부에서는 참조가 불가능하다.

let a = 10;
{
    console.log(`블록문 내부에서 변수 a : ${a}`);
}
console.log(`블록문 외부에서 변수 a : ${a}`);

// 호이스팅
printName();

//함수 '선언문'
function printName(){
    console.log('수코딩');
}
// let const는 호이스팅 불가능

(function init() {
    console.log('init');
})();

function init() {
    console.log('init2');
}
console.log(init());