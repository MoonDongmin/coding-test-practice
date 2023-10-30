// function map(prediacte, thisArg) {
//     let list = [];
//     for (let i = 0; i < a.length; i++) {
//         list.push(prediacte(a[i], i));
//     }
//     return list;
// }

let a = [10, 11, 12, 13, 14, 15];

let answer = a.map(function (v, i) {
    return v * v;
}, [1, 2]);
console.log(answer);

