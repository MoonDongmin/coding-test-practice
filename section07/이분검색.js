function solution(target, arr) {
    let answer = 1;
    arr.sort();
    let m = Math.floor(arr.length / 2);

    while (arr[m] === target) {
        if (arr[m] === target) {
            answer++;
            break;
        } else if (arr[m] < target) {
            answer++;
            m = (m - 1) / 2;
        } else if (arr[m] > target) {
            answer++;
            m = (m + 1) / 2;
        }
    }

    return answer;
}

function mainSolution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b);
    let lt = 0;
    let rt = arr.length - 1;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (arr[mid] === target) {
            answer = mid + 1;
            break;
        } else if (arr[mid] > target) {
            rt = mid - 1;
        } else if (arr[mid] < target) {
            lt = mid + 1;
        }
    }
    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(mainSolution(32, arr));