function solution(s) {
    let answer = "";

    for (let x of s) {
        if (!answer.includes(x)) {
            answer += x;
        }
    }

    return answer;
}

function mainSolution(s) {
    let answer = "";
    //console.log(s.indexOf("k"));
    for (let i = 0; i < s.length; i++) {
        //console.log(s[i], i, s.indexOf(s[i]));
        if (i === s.indexOf(s[i]))
            answer += s[i];
    }
    return answer;
}

console.log(mainSolution("ksekkset"));