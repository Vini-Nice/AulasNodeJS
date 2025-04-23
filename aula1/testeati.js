// Solicitar ao usuário que insira as notas e calcular a média no terminal

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a primeira nota: ", (nota1) => {
    readline.question("Digite a segunda nota: ", (nota2) => {
        let media = (Number(nota1) + Number(nota2)) / 2;
        console.log(`A média das notas ${nota1} e ${nota2} é ${media}`);
        
        // Solicitar ao usuário que insira o peso e a altura e calcular o IMC no terminal

readline.question("Digite o peso: ", (peso) => {
    readline.question("Digite a altura: ", (altura) => {
        let imc = peso / (altura * altura);
        console.log(`Seu IMC e ${imc}`);
        

        // Solicitar ao usuário que insira a temperatura em Celsius e converta para Fahrenheit

readline.question("Digite a temperatura em Celsius: ", (Celsius) => {
    let Fahrenheit = (Celsius * 9 / 5) + 32;
    console.log(`A temperatura em Fahrenheit e ${Fahrenheit}`);
    

    // Solicitar ao usuário que insira o preco e o desconto e calcular o preco final com o desconto

readline.question("Digite o preco: ", (preco) => {
    readline.question("Digite o desconto: ", (desconto) => {
        let precoDescontado = (preco * desconto) / 100;
        let precoFinal = preco - precoDescontado;
        console.log(`O preco final com o desconto de ${desconto} ficou em ${precoFinal}`);
        return readline.close();
    });
})

})

    });
});

    });
});





