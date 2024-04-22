function solution(size, arr) {
    let answer = Array.from({length: size}, () => 0);
    for (let i = 0; i < arr.length; i++) {
        for (let x of answer) {
            if (x === arr[i]) {
                // ...
            }
        }
        answer.pop();
        answer.unshift(arr[i]);
        console.log(answer);

    }
    return answer;
}

function mainSolution(size, arr) {
    let answer = Array.from({length: size}, () => 0);

    // x 는 arr 의 value 값에 대응이 됨
    arr.forEach(x => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if (x === answer[i]) {
                pos = i;
            }
        }
        // miss 인 경우
        if (pos === -1) {
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        } else { // hit 인 경우
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = x;
    })
    return answer;
}

function mainSolution2(size, arr) {
    let answer = Array.from({length: size}, () => 0);
    arr.forEach(x => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if (x === answer[i])
                pos = i;
        }
        if (pos === -1) {
            answer.unshift(x);
            if (answer.length > size) {
                answer.pop();
            }
        } else {
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    })
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(mainSolution(5, arr));
