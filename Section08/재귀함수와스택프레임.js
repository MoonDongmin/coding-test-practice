function solution(n) {
    let answer = 1;
    const stack = [];
    while (true) {
        if (answer > n) break;

        function a() {
            stack.push(answer);
        }

        a();
        answer++;
    }
    console.log(stack.toString().replace(/,/g, ' '));
}

function mainSolution(n) {
    function DFS(L) {
        if (L === 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }

    DFS(n)
}

// solution(3);
mainSolution(3);
