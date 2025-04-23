//! Exercicio do par impar, adicionar código para ao final da execução do programa, perguntando se o usuário deseja continuar, se afirmativo, repetir o código.

const readline = require ('readline-sync')

let num = Number(readline.question('Digite um numero: '));

const result = (!isNaN(num)) ? (num % 2 == 0) ? 'par' : 'impar' : 'número inválido';
console.log(`O numero digitado é ${result}`);

let escolha = readline.question('Deseja continuar? (sim/não): ');

while(escolha === 'sim') {
    num = Number(readline.question('Digite um numero: '));

    const result = (!isNaN(num)) ? (num % 2 == 0) ? 'par' : 'impar' : 'número inválido';
    console.log(`O numero digitado é ${result}`);
    escolha = readline.question('Deseja continuar? (sim/não): ');
} console.log('Fim do programa');

