function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var a = numer1 * denom2 + numer2 * denom1;
    var b = denom1 * denom2;
    // 최소 공약수 구하기
    // a, b를 나눔. 만약 나눠 떨어지면 b가 최대 공약수
    // 서로 나누어 떨어지지 않는다면 b와 a % b 로 다시 나눔
    // 서로 나누진다면 a%b가 최대 공약수
    const c = (x, y) => (x % y == 0 ? y : c(y, x % y));

    answer[0] = a / c(a, b);
    answer[1] = b / c(a, b);
    return answer;
}

