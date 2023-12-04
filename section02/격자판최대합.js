function solution(arr) {
    let answer;
    let x = 0, xMax = 0; // 가로
    let y = 0, yMax = 0; // 세로
    let z1Max = 0, z2Max = 0; // 대각선


    // 가로,세로 최대값
    for (let i = 0; i < 5; i++) {
        // z는 대각선 최대합
        z1Max += arr[i][i];
        z2Max += arr[i][4 - i];
        for (let j = 0; j < 5; j++) {
            x += arr[i][j];
            y += arr[j][i];
        }
        if (xMax < x) {
            xMax = x;
        }
        if (yMax < y) {
            yMax = y;
        }
        x = 0;
        y = 0;
    }

    answer = Math.max(Math.max(xMax, yMax), Math.max(z1Max, z2Max));

    return answer;
}

function mainSolution(arr){
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    let sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1=sum2=0;
        for(let j=0; j<n; j++){
            sum1+=arr[i][j];
            sum2+=arr[j][i];
        }
        answer=Math.max(answer, sum1, sum2);
    }
    sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1+=arr[i][i];
        sum2+=arr[i][n-i-1];
    }
    answer=Math.max(answer, sum1, sum2);
    return answer;
}

let arr = [[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11], // 115
    [11, 25, 50, 53, 15], // 154
    [19, 27, 29, 37, 27], // 139
    [19, 13, 30, 13, 19]]; // 94
console.log(mainSolution(arr));