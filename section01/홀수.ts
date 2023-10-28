function solution(arr) {
    let answer = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            answer.push(arr[i]);
            sum += arr[i];
        }
    }

    let min = answer[0];

    for (let i = 0; i < answer.length; i++) {
        if (min > answer[i]) {
            min = answer[i];
        }
    }

    return sum + "\n" + min;

}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

function mainSolution(arr) {
    let answer = [];
    let sum = 0, min = Number.MAX_VALUE;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;
}

console.log(mainSolution(arr));
