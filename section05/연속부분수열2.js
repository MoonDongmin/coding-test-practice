function solution(m, arr) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] <= m) answer++;

        while (sum <= m) {
            sum -= arr[lt++];
            if (sum <= m) answer++;
        }
    }

    return answer;
}

function mainSolution(m, arr) {
    let answer = 0;
    let sum = 0, lt = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        while (sum > m) {
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1);
    }

    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(mainSolution(5, a));