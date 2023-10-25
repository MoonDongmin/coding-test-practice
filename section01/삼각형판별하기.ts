function solution(a, b, c) {
    let answer = "YES", max;

    if (a + b > c) {
        return answer;
    } else {
        return "NO";
    }

}

console.log(solution(13, 33, 17));

function mainSolution(a, b, c) {
    let answer = "YES";
    let max;
    let sum = a + b + c;


    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if ((sum - max) <= max) answer = "NO";
    return answer;
}

console.log(mainSolution(13, 33, 17));
