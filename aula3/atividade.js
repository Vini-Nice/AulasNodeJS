// Exercício com operador ternário e validação da entrada

// - Programa que identifica se o numero é par ou impar

const readline = require('readline-sync');

let num = Number(readline.question('Digite um numero: '));


const result = (!isNaN(num)) ? (num % 2 == 0) ? 'par' : 'impar' : 'número inválido';
console.log(`O numero digitado é ${result}`);

if(isNaN(num)) {
    console.log('Numero inválido');
    return;
} else {
    console.log('Numero válido');
} if(num % 2 == 0) {
    console.log('O numero digitado é par');
} else {
    console.log('O numero digitado é impar');
}