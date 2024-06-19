function mySolution(n) {
    let answer = [];
    let arr = Array.from({length: n}, (v, i) => i + 1);

    function DFS(a) {
        if (a > n) return;
        if (a === 1) {
            for (let x of arr) {
                answer.push(x);
            }
        }
        console.log(answer);
        answer.pop();
        DFS(a + 1);
    }

    DFS(1);
    return answer;
}

function solution(n) {
    let answer = [];
    let ch = Array.from({length: n + 1}, () => 0); //check 배열

    function DFS(v) {
        if (v === n + 1) {
            let tmp = '';
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 1) tmp += i + ' ';
            }
            if (tmp.length > 0) answer.push(tmp.trim());
        } else {
            ch[v] = 1;
            DFS(v + 1);
            ch[v] = 0;
            DFS(v + 1);
        }
    }

    DFS(1);
    return answer;
}

console.log(solution(3));
