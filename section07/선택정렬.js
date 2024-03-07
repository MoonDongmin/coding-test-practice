function solution(arr) {
    let answer = arr;
    answer = answer.sort((a, b) => a - b).join(' ');
    return answer;
}

function mainSolution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(mainSolution(arr));