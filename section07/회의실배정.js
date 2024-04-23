function solution(meeting) {
    let answer = 0;
    meeting.sort();
    for (let i = 0; i < meeting.length; i++) {
        for (let j = 1; j < meeting.length; j++) {
            if (meeting[i][1] === meeting[j][0]) {
                answer++;
            }
        }
    }
    return answer;
}

function mainSolution(meeting) {
    let answer = 0;
    /* 시간 정렬
    1. a의 끝나는 시간과 b의 끝나는 시간이 같은 경우 시작 시간을 기준으로 오름 차순 정렬
    2. 위의 상황이 아닌 경우 끝나는 시간을 기준으로 오름 차순 정렬
    */

    meeting.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });

    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }

    return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(mainSolution(arr));