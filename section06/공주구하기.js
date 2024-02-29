function solution(n, k) {
    let answer;
    // (배열의 길이, (v,i)) => v는 value 값, i = 인덱스 값
    let queue = Array.from({length: n}, (v, i) => i + 1);


    while(queue.length){ // 큐가 하나일 때 까지 반복을 함
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length===1) answer=queue.shift();
    }

    return answer;
}

console.log(solution(8, 3));