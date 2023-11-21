function solution(s) {
    let answer = "";

    for (let x of s.toString()) {
        if (x === "A") x = "#";
        answer += x;
    }
    return answer;
}

let str = "BANANA";

//console.log(solution(str));

function mainSolution(s) {
    let answer = "";

    for (let x of s) {
        if (x === "A") answer += "#";
        else answer += x;
    }
    return answer;
}

function mainSolution2(s) {
    let answer = s;
    answer = answer.replace(/A/g, "#");
    return answer;
}

console.log(mainSolution2(str));
