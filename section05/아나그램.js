function solution(arr1, arr2) {
    let answer = "YES";
    arr1 = Array.from(arr1.toLowerCase()).sort();
    arr2 = Array.from(arr2.toLowerCase()).sort();
    let a = new Map();
    let b = new Map();

    for (let x of arr1) {
        if (a.has(x)) a.set(x, a.get(x) + 1);
        else a.set(x, 1);
    }
    for (let x of arr2) {
        if (b.has(x)) b.set(x, b.get(x) + 1);
        else b.set(x, 1);
    }
}

function mainSolution(arr1, arr2) {
    let answer = "YES";
    let sH = new Map(); // map 객체 생성
    for (let x of arr1) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }

    for (let x of arr2) {
        if (!sH.has(x) || sH.get(x) === 0) return "NO";
        sH.set(x, sH.get(x) - 1);
    }
    return answer
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(mainSolution(a, b));