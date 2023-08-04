function solution(n) {
    var answer = n.toString();
    var split = answer.split('');
    var a = 0;
    for (let i = 0; i < split.length; i++) {
        a += parseInt(split[i]);
    }

    return a;
}