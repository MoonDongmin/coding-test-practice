function mySolution(players, callings) {
    let answer = players;
    for (let i = 0; i < callings.length; i++) {
        for (let j = 0; j < players.length; j++) {
            if (callings[i] === players[j]) {
                [players[j - 1], players[j]] = [players[j], players[j - 1]];
            }
        }
    }
    return answer;
}

function solution(players, callings) {
    // players 배열의 인덱스를 저장할 맵 생성
    const indexMap = new Map();
    for (let i = 0; i < players.length; i++) {
        indexMap.set(players[i], i);
    }

    // callings 배열을 순회하면서 위치 변경
    for (let i = 0; i < callings.length; i++) {
        const player = callings[i];
        if (indexMap.has(player)) {
            const idx = indexMap.get(player);
            if (idx > 0) {
                // 인덱스가 0보다 큰 경우에만 위치 변경
                [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
                // 맵에서도 인덱스 업데이트
                indexMap.set(players[idx], idx);
                indexMap.set(players[idx - 1], idx - 1);
            }
        }
    }

    return players;
}


mySolution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])
