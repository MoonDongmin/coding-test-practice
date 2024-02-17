// 중요한 것 "연속된!!"
function solution(k, arr) {
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        for (let j = i + 1; j < i + k; j++) {
            sum += arr[j];
        }
        if (answer < sum) {
            answer = sum;
        }
        sum = 0;
    }
    return answer;
}

function mainSolution(k, arr) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];
    answer = sum;

    for (let i = k; i < arr.length; i++) {
        sum += (arr[i] - arr[i - k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// 0 1 2  3
console.log(mainSolution(3, a));