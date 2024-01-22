// 소수: 2보다 큰 자연수 중에서 1과 자기 자신을 제외한 자연수로는 나누어떨어지지 않는 자연수이다.
// 소수 판별법
// :  X를 2부터 X-1까지의 모든 수로 나누어보는 것

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function solution(arr) {
    let answer = [];

    for (let x of arr) {
        let reverse = x.toString().split("").reverse().join("");
        if (isPrime(reverse)) {
            answer.push(reverse);
        }
    }

    return answer;
}

function solutionMain(arr) {
    let answer = [];
    for (let x of arr) {
        let res=Number(x.toString().split("").reverse().join(""));
        // while (x) { // reverse랑 똑같음
        //     let t = x % 10;
        //     res = res * 10 + t;
        //     x = parseInt(x / 10);
        // }
        // 위의 코드는 밑과 같음

        if (isPrime(res)) answer.push(res);
    }

    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solutionMain(arr));