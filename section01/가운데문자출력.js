function solution(s) {
    let answer = s.split("");
    let length = s.length;
    let odd = Math.floor(length / 2);

    if (s.length % 2 === 0) {
        return answer[odd - 1] + answer[odd];
    } else {
        return answer[odd];
    }
}

function mainSolution(s) {
    let answer;
    let mid = Math.floor(s.length / 2); // 중앙을 가르킴

    if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);

    // if(s.length%2===1) answer=s.substr(mid, 1);
    // else answer=s.substr(mid-1, 2);

    return answer;
}

console.log(solution("study"));