function solution(n, arr) {
    let answer;
    let max = 0;
    let bigPrice = arr[0];

    for (let i = 0; i < n; i++) {
        answer = arr[i].toString().split('').reduce((v, k) => v + k * 1, 0);
        if (answer > max || arr[i] > bigPrice) {
            max = answer;
            bigPrice = arr[i];
        }
    }

    return bigPrice;
}

// 숫자 자체를 다룸
function solutionMain1(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = 0, tmp = x;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}

// 숫자를 문자로 바꾸고 다룸
function solutionMain2(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solutionMain(7, arr));