/* 11.2 표준 내장 객체 */

const str = 'abc';
console.log(str.length);

const email = ' testnaver.com';
if(email.includes("@") === false) {
    console.log('@가 없습니다.');
}
console.log(email.indexOf('e'));
console.log(email.trim());

const arr = ['a', 'b', 'c'];
arr.pop();
arr.push('d');
console.log(arr);

const date = new Date();
console.log(date.getFullYear());

const random = Math.random() * 20;
console.log(Math.floor(random));