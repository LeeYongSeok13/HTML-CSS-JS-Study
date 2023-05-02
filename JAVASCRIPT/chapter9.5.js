/* 9.5 반복문 다루기 */
/* while */

let num1 = 1;
while(num1 <= 10) {
    console.log(num1);
    num1++;
}

let num2 = 1;
do {
    // 조건문이 참이면 실행할 구문
    console.log('do');
}while(false);

/* for */

for(let i = 0; i < 2; i++) {
    console.log(`i:${i}`);
    for(let k = 0; k < 2; k++) {
        console.log(`k:${k}`);
    }
}

let i = 0;
const arr = ['apple', 'banana', 'orange'];
const obj = {
    name:'철수',
    age: 20,
};

for (let key in obj) {
    console.log(obj[key]);
}

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

for (let index in arr) {
    console.log(arr[index]);
}

for (let i=0; i<5; i++){
    // break; 반복문 즉시 종료
    //continue; 건너 뜀
    if(i === 3) break;
    console.log(i);
}