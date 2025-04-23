const readline = require('readline-sync');
const quantidade = Number(readline.question('Quantidade de números para a série de Fibonacci?'));

let n1=1, n2=1, n3=0;

if (quantidade === 1) {
    console.log(n1)
} else if (quantidade === 2) {
    console.log(n1, '\n', n2)
} else if (quantidade > 2) {
    console.log(n1, '\n', n2)
    for (let i = 2; i<= quantidade; i++) {
        n3 = n1 + n2;
        console.log(n3);
        console.log(`** ${(n2/n1).toFixed(3)} **`);
        n1 = n2;
        n2 = n3;
    }
}