function solution(s, t) {
    let answer = 0;

    for (let x of s.toString()) {
        if (x === t) {
            answer++;
        }
    }

    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

function mainSolution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }
    return answer;
}

function mainSolution2(s, t) {
    let answer = s.split(t).length - 1;
    return answer;
}

console.log(mainSolution2(str, "R"));