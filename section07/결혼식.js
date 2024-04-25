function solution(times) {
    let answer = 0;
    times.sort((a, b) => {
        if (a[0] < b[0]) return a[0] - b[0]
        else return a[1] - b[1];
    });
    console.log(times);

    for (let i = 0; i < times.length; i++) {
        for (let j = 1; j < times.length; j++) {
            if (times[i][1] > times[j][0] &&
                times[i][1] < times[j][1]) answer++;
            else if (times[i][1] <= times[j][0] &&
                times[i][0] < times[j][0]) {
                answer--;
                break;
            }
        }
    }

    return answer;
}

function mainSolution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (let x of times) {
        T_line.push([x[0], 's']);
        T_line.push([x[1], 'e']);
    }
    T_line.sort((a, b) => {
        // 시간이 같을 경우 -> a[1]-b[1] 이렇게 하면 문자기 때문에
        // ASC 코드로 바꿔줘야함...
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1];
        else return a[0] - b[0];
    });

    let cnt = 0;
    for (let x of T_line) {
        if (x[1] === 's') cnt++;
        else cnt--;
        // answer의 값을 최대 값으로 계속 바꿔줌
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(mainSolution(arr));