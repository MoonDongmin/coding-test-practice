function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < 0) {
                if (arr[j] < arr[idx]) j = idx;
            } else {
                if (arr[j] < arr[idx]) idx = j;
            }
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}

function mainSolution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(mainSolution(arr));