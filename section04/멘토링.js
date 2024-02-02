function solution(test) {
    let answer = 0;
    let max = test[0][0];

    for (let i = 0; i < test.length; i++) {
        let cnt = 0;
        for (let x of test[i]) {
            if (x > max) {
                max = x;
            } else {
                cnt++;
                answer = cnt - 1;
            }
        }
    }
    return answer;
}

function mainSolution(test) {
    let answer = 0; // 멘토, 멘티 짝궁 수
    let m = test.length; // 테스트 수
    let n = test[0].length; // 학생수

    // 4중 for문을 통해 문제 해결
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0, pj = 0;
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }

    return answer;
}

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(mainSolution(arr));