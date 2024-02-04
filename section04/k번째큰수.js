function solution(n, k, card) {
    let answer = new Array();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let z = 0; z < n; z++) {
                let sum = 0;
                if (i !== j && j !== z && z !== i) {
                    sum += card[i] + card[j] + card[z];
                    answer.push(sum);
                }
            }
        }
    }
    answer.sort((a, b) => b - a);
    answer = [...new Set(answer)][k - 1];
    return answer;
}

function mainSolution(n, k, card) {
    let answer;
    let tmp = new Set(); // Set이라는 객체가 tmp에 할당

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                tmp.add(card[i] + card[j] + card[k]);
            }
        }
    }
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k - 1];
    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));