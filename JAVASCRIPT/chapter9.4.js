/* 9.4 조건문 다루기 */
/* if, switch */

let num1 = 10;
if (num1 % 2 === 0) {
    // 실행할 코드
    console.log('num1은 짝수입니다.');
} else {
    console.log('num1은 홀수입니다.');
}

/* if는 단독 사용 가능, else, else if는 단독 사용 불가능 */

let num2 = 10;
if(num2 > 20) {
    console.log('num2는 20보다 큽니다');
} else if (num2 > 5) {
    console.log('num2는 5보다 큽니다.');
} else {
    console.log('num2는 5보다 작습니다.');
}

let food1 = 'melon';
switch (food1) {
    case 'melon':
        console.log('fruit');
        break;
    case 'apple':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vegetable');
        break;
    default:
        console.log('아무것도 아니다.');
        break;
}

let food2 = 'apple';
switch (food2) {
    case 'melon':
    case 'apple':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vegetable');
        break;
    default:
        console.log('아무것도 아니다.');
        break;
}

let num3 = 10;
if (num3 % 2 === 0) {
    console.log('num3은 짝수입니다.');

    if (num3 > 5) {
        console.log('num3은 5보다 큽니다.');
    } else if (num3 > 0) {
        console.log('num3은 0보다 큽니다.');
    } else {
        console.log('num3은 0보다 작습니다.');
    }
}

let score = 85;
if (score >= 90) {
    console.log('A++');
} else if (score < 90 && score >= 80) { // JS에서 조건을 (80 < score < 90) 으로 쓰면 안된다. 논리연산자 &&을 사용하자.
    console.log('B++');
}