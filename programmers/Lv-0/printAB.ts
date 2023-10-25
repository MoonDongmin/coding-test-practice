const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ')

const [a, b] = inputData;
console.log(`a = ${a}\nb = ${b}`);

