const readline = require('readline-sync');
// const num = Number(readline.question('Digite um número: '));

// for (let i = 0; i <= 1000; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// let i = 0

// while ( i <= 10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++
// }

let num;
for (; ;) {
    num = Number(readline.question('Digite um número: '));
    if (num >= 0) {
        break
    }
}

console.log(num **2);