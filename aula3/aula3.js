const readline = require('readline-sync');

// const idade = Number(readline.question('Qual a sua idade? '));

// if(isNaN(idade)) {
//     console.log('Idade inválida');
//     return;
// } else {
//     console.log('Idade válida');
// } if(idade >= 18) {
//     console.log('Maior de idade');
// } else {
//     console.log('Menor de idade');
// }

let peso = Number(readline.question('Qual o seu peso? (em kg) '));
let altura = Number(readline.question('Qual a sua altura? (em cm) '));
let alturacm = altura / 100;
let imc = peso / (alturacm * alturacm);

if(isNaN(peso) || isNaN(altura)) {
    console.log('Peso ou altura inválida');
    return;
} else {
    console.log('Peso e altura válidos');
} if(imc < 18.5) {
    console.log('Abaixo do peso');
} else if(imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if(imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if(imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade morbida');
}


