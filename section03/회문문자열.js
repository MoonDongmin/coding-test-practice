function solution(s) {
    let answer = "YES";
    let word = s.toLowerCase();
    let a = [];
    let b;
    for (let x of word) {
        a.push(x);
    }
    b = a.reverse();

    for (let i = 0; i < b.length; i++) {
        if (a[i] !== b[i]) {
            return answer = "NO";
        }
    }

    return answer;

}

function mainSolution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    // let len = s.length;
    // for (let i = 0; i < Math.floor(len / 2); i++) {
    //     if (s[i] !== s[len - i - 1]) return answer = "NO"
    // }
    if (s.split('').reverse().join('') !== s) {
        return "NO";
    }
    return answer;
}

let str = "goohi";
console.log(mainSolution(str));