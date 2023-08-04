function solution(money) {
    var answer = [];
    var a = Math.floor(money / 5500);
    var b = money % 5500;
    answer = [a, b];
    return answer;
}