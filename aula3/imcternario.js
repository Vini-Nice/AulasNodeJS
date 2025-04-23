const readline = require('readline-sync');

let peso = Number(readline.question('Qual o seu peso? (em kg) '));
let altura = Number(readline.question('Qual a sua altura? (em cm) '));
let alturacm = altura / 100;
let imc = peso / (alturacm * alturacm);

const result = (isNaN(peso) || isNaN(alturacm)) ? 'Peso ou altura inválida' : (alturacm >= 273) ? 'Altura inválida' : (imc < 18.5) ? 'Abaixo do peso' : (imc >= 18.5 && imc < 25) ? 'Peso normal' : (imc >= 25 && imc < 30) ? 'Sobrepeso' : (imc >= 30 && imc < 40) ? 'Obesidade' : 'Obesidade morbida';
console.log(result);