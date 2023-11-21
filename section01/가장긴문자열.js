function solution(s) {
    let answer = "";
    let maxLength = s[0].length;

    for (let x of s) {
        if (x.length > maxLength) {
            answer = x;
        }
    }

    return answer;
}

function mainSolution(s) {
    let answer = "", max = Number.MIN_VALUE;

    for (let x of s) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }

    return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(mainSolution(str));

