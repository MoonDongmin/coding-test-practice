function count(stable, dist) {
    let cnt = 1, ep = stable[0];
    for (let i = 1; i < stable.length; i++) {
        if (stable[i] - ep >= dist) {
            cnt++;
            ep = stable[i];
        }
    }
    return cnt;
}

function solution(c, stable) {
    let answer;
    let horse = Array.from({length: c}, (v, i) => i + 1);
    let min = stable[0];
    let max = stable[stable.length - 1];

    stable.sort((a, b) => a - b);


    return answer;
}

function mainSolution(c, stable) {
    let answer;
    stable.sort((a, b) => a - b);
    let lt = 1;
    let rt = stable[stable.length - 1];
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1;
        } else rt = mid - 1
    }


    return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(mainSolution(3, arr));