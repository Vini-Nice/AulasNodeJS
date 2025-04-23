// const readline = require('readline-sync');

// let num = Number(readline.question("Digite um número: "));
// console.log(num **2)

const readline = require('readline-sync');

let idade = Number(readline.question("Digite sua idade:\n"));

if (idade >120 || idade <0){
    console.log("Idade inválida");
} else if (idade < 18){
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}