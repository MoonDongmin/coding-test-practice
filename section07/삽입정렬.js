function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        let idx = i + 1;
        for (let j = 0; j < idx; j++) {
            if (arr[j] > arr[idx]) {
                [arr[j], arr[idx]] = [arr[idx], arr[j]];
            }
        }
    }
    return answer;
}

function mainSolution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > tmp) arr[j + 1] = arr[j];
            else break;
        }
        arr[j + 1] = tmp;
    }
    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(mainSolution(arr));