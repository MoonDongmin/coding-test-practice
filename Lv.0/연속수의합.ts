function solution(num, total) {
    let answer = [];
    if (num % 2 != 0) {
        let a = parseInt(String(total / num));
        for (let i = a - parseInt(String(num / 2)); i <= a + parseInt(String(num / 2)); i++) {
            answer.push(i);
        }
    } else {
        let a = parseInt(String(total / num));
        for (let i = a - parseInt(String(num / 2)) + 1; i <= a + parseInt(String(num / 2)); i++) {
            answer.push(i);
        }
    }
    return answer;
}