function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) answer.push(arr1[i]);
        }
    }

    answer = [...new Set(answer)].sort((a, b) => a - b);
    return answer;
}

function mainSolution(arr1, arr2) {
    let answer = [];
    arr1.sort((a, b) => a - b); // 오름차순 정렬을 함, 아무것도 안넣으면 사전순으로 정렬이 됨
    arr2.sort((a, b) => a - b); // 오름차순 정렬을 함
    let p1 = 0;
    let p2 = 0;

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if (arr1[p1] < arr2[p2]) p1++;
        else p2++;
    }

    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(mainSolution(a, b));