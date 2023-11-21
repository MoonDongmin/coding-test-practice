function solution(a, b, c) {
    let answer;

    if (a < b && a < c) {
        answer = a;
    } else if (b < a && b < c) {
        answer = b;
    } else {
        answer = c;
    }
    return answer;
}

console.log(solution(10, 1, 21));


function mainSolution(a, b, c) {
    let answer;

    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;

    return answer;
}

console.log(mainSolution(6, 5, 11));
