function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        stack.push(x);
        if (isNaN(x) && stack.length > 2) {
            let a = stack.pop();
            let b;
            let first;
            let second;
            if (a === '+') {
                b = Number(stack.pop()) + Number(stack.pop());
            } else if (a === '-') {
                first = Number(stack.pop());
                second = Number(stack.pop());
                if (first < second) {
                    b = Math.abs(second - first);
                } else {
                    b = first - second;
                }
            } else if (a === '/') {
                b = Number(stack.pop()) / Number(stack.pop());
            } else if (a === '*') {
                b = Number(stack.pop()) * Number(stack.pop());
            }
            stack.push(b);
        }
    }
    answer = stack[0];
    return answer;
}

function mainSolution(s) {
    let answer;
    let stack = [];

    for (let x of s) {
        if (!isNaN(x)) {
            stack.push(Number(x));
        } else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x === "+") {
                stack.push(lt + rt);
            } else if (x === "-") {
                stack.push(lt - rt);
            } else if (x === "*") {
                stack.push(lt * rt);
            } else if (x === "/") {
                stack.push(lt / rt);
            }
        }
    }
    answer = stack[0]
    return answer;
}

let str = "352+*9-";
console.log(mainSolution(str));