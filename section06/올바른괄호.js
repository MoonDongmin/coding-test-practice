function solution(s) {
    let answer = "YES";
    let cnt = 0;
    for (let x of s) {
        if (x === "(") cnt++;
        else if (x === ")") cnt--;
    }
    if (cnt !== 0) answer = "NO";
    return answer;
}

function mainSolution(s) {
    let answer = "YES";
    let stack = [];
    for (let x of s) {
        if (x === "(") stack.push(x);
        else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }
    if (stack.length > 0) return "NO";
    return answer;
}

let a = "(()(()))(()";
console.log(mainSolution(a));