function solution(m, product) {
    let answer = 0;
    let student = product.length;
    let max = Number.MIN_SAFE_INTEGER;
    let price = 0;

    for (let i = 0; i < student; i++) {
        for (let j = 0; j < 2; j++) {
            if (product[i][0] > max) {
                max = product[i][0];
            }
            price += product[i][j];
            if (price < m) answer++;
        }
    }
    answer = Math.ceil(answer / 2)

    return answer;
}

function mainSolution(m, product) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // 가져온 함수를 정렬을 함 -> 오름차순 정렬

    for (let i = 0; i < n; i++) {
        let money = m - (product[i][0] / 2 + product[i][1]) // 할인 받은 가격을 전체 돈에서 뺀 값을 구함 = 남은 예산
        let cnt = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i && (product[j][0] + product[j][1]) > money) break; // money 보다 클 경우
            if (j !== i && (product[j][0] + product[j][1]) <= money) {
                // j가 i 가 아닐 때 와 값을 더한 값이 money보다 작을 경우 cnt를 더해줌
                money -= (product[j][0] + product[j][1]);
                cnt++;
                answer = cnt;
            }
        }
    }
    return answer;
}

let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(mainSolution(28, arr));