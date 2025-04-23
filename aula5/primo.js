const readline = require('readline-sync');
const n = Number(readline.question('Digite um nº > 1:'));
let ehPrimo = true;
const primos = [

]


if (isNaN(n)) {
    console.log('Número inválido');
} else if (n < 2) {
    console.log('N° tem que ser maior que 1');
} else {
    for (let i = 2; i<n/2+1 ; i++) {
        if (n % i === 0) {
            ehPrimo = false;
            primos.push(i);
            //break;
        }
    }
    if (ehPrimo) {
        console.log(n,'é primo');
    } else {
        console.log(primos);
    }
}