function solution(s) {
    let answer;
    let arr = Array.from(s);
    let sum = 0;
    let cnt = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                sum++;
            }
        }
        if (cnt < sum) {
            cnt = sum;
            answer = arr[i];
        }
        sum = 0;
    }

    return answer;
}

function mainSolution(s) {
    let answer;
    let sH = new Map();
    for (let x of s) {
        if (sH.has(x)) { // sH에 x의 키가 존재하냐의 여부
            sH.set(x, sH.get(x) + 1) // 존재 할 경우 sH의 x의 키의 값에 해당하는 걸 1 증가해 줌
        } else {
            sH.set(x, 1); // 존재 하지 않을 경우 x의 값을 1로 해줌
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of sH) {
        if (val > max) {
            max = val;
            answer = key;
        }
    }
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(mainSolution(str));