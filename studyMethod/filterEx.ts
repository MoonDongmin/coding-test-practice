function filter(predicate, thisArg) {
    let list = [];
    for (let i = 0; i < a.length; i++) {
        if(predicate(a[i],i)){
            list.push(a[i]);
        }
    }
    return list;
}

let a = [10, 11, 12, 13, 14, 15];

let answer = a.filter(function (v, i) {
    return v % 2 == 0;
}, [1, 2]);
console.log(answer);

