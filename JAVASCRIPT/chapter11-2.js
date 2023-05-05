/* 11.2 표준 내장 객체 */

const str = 'abc';
console.log(str.length);

const email = ' testnaver.com';
if(email.includes("@") === false) {
    console.log('@가 없습니다.');
}
console.log(email.indexOf('e'));
console.log(email.trim());