function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i === 0 || i % 2 === 0) {
            arr = arr.slice(0, query[i] + 1);
        } else {
            arr = arr.slice(query[i]);
        }
    }

    if (arr.length === 0) return [-1];

    return arr;
}