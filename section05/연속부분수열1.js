function solution(m, arr) {
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        for (let j = 1; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
                if (sum === m) {
                    answer++;
                }
            }
        }
        sum = 0;
    }

    return answer;
}

function mainSolution(m, arr) {
    let answer = 0;
    let lt = 0, sum = 0;

    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) answer++;
        }
    }
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(mainSolution(6, a));