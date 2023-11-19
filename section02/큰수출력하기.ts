function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j + 1]) {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}

function mainSolution(arr) {
    let answer = [];
    answer.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(mainSolution(arr));