function solution(str) {
    let answer = "";
    str = str.replace(/\D/g, '');
    let text = str.split('');

    if (text[0] === '0') answer = str.substring(1, str.length);

    return answer;
}

function mainSolution(str) {
    let answer = "";

    for (let x of str) {
        if (!isNaN(x)) {
            answer += x;
        }
    }

    return parseInt(answer);
}

function mainSolution2(str) {
    let answer = "";

    for (let x of str) {
        if (!isNaN(x)) {
            answer = answer * 10 + Number(x);
        }
    }

    return answer;
}

let str = "g0en2T0s8eSoft";
console.log(mainSolution2(str));