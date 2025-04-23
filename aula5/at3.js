//* Calcula a potência para uma base e expoente qualquer inteiro positivo usando laço. Por convenção todo número elevado a zero é um. 

const readline = require('readline-sync');

let base = Number(readline.question('Digite a base: '));
let expoente = Number(readline.question('Digite o expoente: '));
let potencia = 1;

for (let i = 0; i < expoente; i++) {
    potencia *= base;
} 

console.log(`A potência de ${base} elevado a ${expoente} é ${potencia}`);
