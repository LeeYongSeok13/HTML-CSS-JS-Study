/* 11장 자바스크립트 객체 다루기 */

const person = {
    name: 'Sucoding',
    age: 20,
    isAdult: false,
    'phone number': "010-1234-1234",
    printInfo: function(msg) {
        console.log(msg);
    }    
}; 
person.name = '철수'; //person name의 값을 재 정의

console.log(person.name); // 마침표 연산자 접근방법
console.log(person['age']); // 대괄호 연산자 접근방법
console.log(person['phone number']); // 'phone number'은 대괄호 연산자 접근방법으로만 사용가능.
person.printInfo('hello');

let num1 = 10;
let num2 = num1;

num1 = 30;
console.log(num1, num2);