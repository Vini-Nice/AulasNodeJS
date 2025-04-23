const readline = require('readline-sync');
let x = Number(readline.question('Digite um número:'));
const quantidade = Number(readline.question('Quantas vezes deseja repetir?'));

const e = (1 + 1/ x) ** x;

for (let i=1; i<= quantidade; i++) {
    console.log(i, '.', e);
    x++;
}
