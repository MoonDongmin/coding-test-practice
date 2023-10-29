function solution(day, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 == day) {
            answer++;
        }
    }

    return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

function mainSolution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++;
    }

    return answer;
}

console.log(mainSolution(3, arr));