function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false; // 사이즈가 다르면 틀림

    // 이제 키의 갯수가 같다면 key값과 val의 값이 같은지 비교하는 문
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}

function solution(s, t) {
    let answer;
    let map1 = new Map();
    let map2 = new Map();

    for (let x of s) {
        if (map1.has(x)) map1.set(x, map1.get(x) + 1);
        else map1.set(x, 1);
    }

    for (let x of t) {
        if (map2.has(x)) map2.set(x, map2.get(x) + 1);
        else map2.set(x, 1);
    }

    console.log(map1, map2);
    return answer;
}

function mainSolution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();
    for (let x of t) {
        if (tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }

    let len = t.length - 1; // t의 개수보다 하나 적게 개수를 잡아 놓음 => 윈도우 슬라이딩 때문
    // 이 for문은 s의 문자열을 슬라이딩 윈도우하기 위한 for문이라 보면되고 map이 t의 문자열 -1 만큼 만들어줌 (첫 번째, 두 번째)
    for (let i = 0; i < len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }

    // 윈도우 슬라이딩 시작
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1);
        if (compareMaps(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt]) - 1);
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }

    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(mainSolution(a, b));