function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();

    let text = s.replace(/[^a-zA-Z]+/g, ' ');

    if (text.split('').reverse().join('') !== text) answer = "NO";

    return answer;
}

function mainSolution(s) {
    let answer = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, ''); // 다 소문자화 시킴, replace로 알파벳만 놔두고 다 짜름

    if (s.split('').reverse().join('') !== s) answer = "NO";

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7DnuoF";
console.log(mainSolution(str));