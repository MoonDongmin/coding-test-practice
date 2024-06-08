function mySolution(n) {
    let answer = "";

    function DFS(L) {
        let a = Math.floor(L / 2);
        let b = Math.floor(L % 2);
        if (L / 2 === 0) return;
        else {
            DFS(a);
            answer += b;
        }
    }

    DFS(n);
    return answer;
}

function solution(n) {
    let answer = "";

    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2));
            answer += String(n % 2);
        }
    }

    DFS(n);
    return answer;
}

console.log(solution(11));
console.log(solution(11));
