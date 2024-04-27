// 내가 쓴 코드...

// function add(arr) {
//     let sum = 0;
//     for (let x of arr) {
//         sum = sum + x;
//     }
//     return sum;
// }

function solution(m, songs) {
    let answer = Number.MIN_SAFE_INTEGER;
    let a = songs.length / m;

    for (let i = 0; i < a; i++) {

    }
    return answer;
}

function count(songs, capacity) {
    let cnt = 1 // 장 수: 한 장은 있어야 하기 때문에 1로 초기화
    let sum = 0; // 누적 용량
    for (let x of songs) {
        if (sum + x > capacity) { // 용량을 초과하는지 않하는지 확인함
            cnt++; // 장수를 1장 늘림
            sum = x; // 그리고 sum의 값을 x로 바꿈
        } else sum += x; // 저장할 수 있다면 x를 계속 저장
    }
    return cnt;
}

function mainSolution(m, songs) {
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a + b);

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else lt = mid + 1;
    }

    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mainSolution(3, arr));