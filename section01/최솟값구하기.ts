function solution(arr) {
    let answer, min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            answer = min;
        }
    }
    return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

function mainSolution(arr) {
    let answer, min = arr[0]; // min = 가장 큰 값이 출력이됨

    for (let i = 0; i = arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    answer = min;
    return answer;
}

