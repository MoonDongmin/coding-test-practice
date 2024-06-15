function firstSolution(n) {
    let answer = "";

    function DFS(a) {
        if (a > 7) {
            return;
        } else {
            answer += (a + " ");
            DFS(a*2);
            DFS(a*2+1);
        }
    }

    DFS(n);

    return answer;
}

function secondSolution(n) {
    let answer = "";

    function DFS(a) {
        if (a > 7) {
            return;
        } else {
            DFS(a*2);
            answer += (a + " ");
            DFS(a*2+1);
        }
    }

    DFS(n);

    return answer;
}

function thirdSolution(n) {
    let answer = "";

    function DFS(a) {
        if (a > 7) {
            return;
        } else {
            DFS(a*2);
            DFS(a*2+1);
            answer += (a + " ");
        }
    }

    DFS(n);

    return answer;
}


console.log(thirdSolution(1));
