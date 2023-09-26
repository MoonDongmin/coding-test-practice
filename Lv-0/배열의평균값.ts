function solution(numbers) {
    var answer = 0;
    var a = 0;
    for (let i = 0; i < numbers.length; i++) {
        a += numbers[i];
    }
    answer = a / numbers.length;
    return answer;
}