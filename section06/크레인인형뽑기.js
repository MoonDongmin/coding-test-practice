// 처음 짠 코드

// function solution(board, moves) {
//     let answer = 0;
//     let stack = [];
//     let cnt = 0;
//     for (let x of moves) {
//         let j = x - 1;
//         for (let i = 0; i < board.length; i++) {
//             if (board[i][j] !== 0 && stack.length === cnt) {
//                 stack.push(board[i][j]);
//                 //console.log(board[i][j]);
//                 board[i][j] = 0;
//             }
//         }
//         cnt++;
//     }
//
//     // 4, 3, 1, 1, 3, 2, 4
//     return answer;
// }

// 풀이를 듣고 수정한 코드
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    for (let x of moves) {
        let j = x - 1;
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] !== 0) {
                let tmp = board[i][j];
                board[i][j] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(tmp);
                }
                break;
            }
        }
    }

    return answer;
}

function mainSolution(board, moves) {
    let answer = 0;
    let stack = [];

    // 크레인 위치를 정함
    moves.forEach(pos => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][pos - 1] !== 0) {
                let tmp = board[i][pos - 1];
                board[i][pos - 1] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(tmp);
                break;
            }
        }
    });
    return answer;
}

let a = [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));