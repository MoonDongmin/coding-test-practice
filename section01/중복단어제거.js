function solution(s) {
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        if (i === s.indexOf(s[i])) {
            answer += s[i];
        }
    }
    return answer;
}

function mainSolution(s) {
    let answer;

    answer = s.filter(function (v, i) {
        if (s.indexOf(v) === i)
            return true;
    });

    return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(mainSolution(str));