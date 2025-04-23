// Perguntar ao usuário seu peso e sua altura e calcular o IMC e fornecer informações sobre o IMC
// Abaixo de 17	Muito abaixo do peso
// Entre 17 e 18,49	Abaixo do peso
// Entre 18,5 e 24,99	Peso normal
// Entre 25 e 29,99	Acima do peso
// Entre 30 e 34,99	Obesidade I
// Entre 35 e 39,99	Obesidade II (severa)
// Acima de 40	Obesidade III (mórbida)

const readline = require('readline-sync');

let peso = Number(readline.question("Digite seu peso (em kg): "));
let altura = Number(readline.question("Digite sua altura (em cm): "));
let alturacm= altura / 100;
let imc = peso / (alturacm * alturacm);
console.log(`Seu IMC e ${imc.toFixed(2)}`);

if (imc < 17) {
    console.log("Muito abaixo do peso");
} else if (imc >= 17 && imc <= 18.49) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
} else if (imc >=25 && imc <=29,99) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade I");
} else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade II");
} else if (imc >= 40) {
    console.log("Obesidade III");
} 