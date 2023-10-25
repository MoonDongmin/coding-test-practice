function solution(quiz) {
    var result = [];

    for (let i = 0; i < quiz.length; i++) {
        let temp = quiz[i];
        let [left, calculate, right, equal, number] = temp.split(" ");
        let checkResult = eval(`${left}
        ${calculate}
        ${right}`)

        if (checkResult.toString() === result) {
            result.push("O");
        } else {
            result.push("X");
        }
    }

    return result;

}

