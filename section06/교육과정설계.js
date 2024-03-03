function solution(need, plan) {
    let answer = "YES";
    let queue = Array.from(plan);
    let a = [];


    for (let i = 0; i < plan.length; i++) {
        for (let x of need) {
            if (queue[i] === x) {
                a.push(queue[i]);
                queue.shift();
            }

        }
    }
    a = a.join('');
    if (a !== need) answer = "NO";

    return answer;
}

function mainSolution(need, plan) {
    let answer = "YES";
    let queue = need.split(''); // [ 'C', 'B', 'A' ] 의 문자 배열로 되어 있음

    for (let x of plan) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) return "NO";
        }
    }
    if (queue.length > 0) return "NO";

    return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(mainSolution(a, b));