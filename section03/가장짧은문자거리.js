function solution(s, t) {
    let answer = [];
    let sum = 0;
    // for (let x of s) {
    //     if (x === t) answer.push(0);
    //     else answer.push(x);
    // }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            answer.push(0);
        } else {
            answer.push(s[i]);
        }
    }
    return answer;
}

function solutionMain(s, t) {
    let answer = [];
    let max = 1000; // 임의로 숫자를 하나 지정을 함
    for (let x of s) {
        if (x === t) {
            max = 0;
            answer.push(0);
        } else {
            max++;
            answer.push(max);
        }
    }
    max = 1000;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            max = 0;
            answer[i] = 0;
        } else {
            max++;
            answer[i] = Math.min(answer[i], max);
        }
    }

    return answer;
}

let str = "teachermode";
console.log(solutionMain(str, 'e'));