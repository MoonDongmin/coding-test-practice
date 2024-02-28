function solution(s) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else {
            if (s[i - 1] === "(") answer += stack.length;
        }

    }
    console.log(stack);
    return answer;
}

function mainSolution(s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push(s[i]);
        else {
            stack.pop();
            if (s[i - 1] === "(") answer += stack.length;
            else answer += 1;// 막대기의 끝일 경우
        }
    }

    return answer;
}

let a = "()(((()())(())()))(())";
console.log(mainSolution(a));