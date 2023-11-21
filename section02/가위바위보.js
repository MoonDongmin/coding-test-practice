function solution(a, b) {
    let answer = "";
    for (let i = 0; i < 5; i++) {
        if (a[i] > b[i]) {
            answer += "A\n";
        } else if (a[i] < b[i]) {
            answer += "B\n";
        } else answer += "D\n";
    }
    answer = answer.slice(0, -1);
    return answer;
}

function mainSolution(a, b) {
    let answer = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += "D" + " ";
        else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
        else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
        else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
        else answer += "B" + " ";
    }
    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(mainSolution(a, b));