function solution(arr) {
    let answer = "NO";
    let flag = 0;
    let total = 0;
    for (let x of arr) {
        total += x;
    }

    function DFS(idx, sum) {
        if (flag) return;
        if (idx === arr.length) {
            if (total - sum === sum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            DFS(idx + 1, sum + arr[idx]);
            DFS(idx + 1, sum);
        }

    }

    DFS(0, 0);

    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
