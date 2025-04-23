const readline = require('readline-sync'); 

const peso = Number(readline.question('Qual o seu peso? '));
const altura = Number(readline.question('Qual a sua altura? '));
const alturacm = altura / 100

const imc = (!isNaN(peso) && !isNaN(altura)) ? peso / (alturacm**2) :'Peso ou altura inválido'

console.log("Imc: ", imc.toFixed(2)); 

const estado = (imc < 17) ?  'Muito abaixo do peso' : 
(imc>= 17 && imc < 18.49) ? 'Abaixo do peso' :
(imc >= 18.5 && imc < 24.99) ? 'Peso normal' :
(imc >= 25 && imc < 29.99) ? 'Acima do peso' :
(imc >= 30 && imc < 34.99) ? 'Obesidade I' :
(imc >= 35 && imc < 39.99) ? 'Obesidade II' :
(imc >= 40) ? 'Obesidade III' : 'Peso ou altura inválido'

console.log("Estado: ", estado);