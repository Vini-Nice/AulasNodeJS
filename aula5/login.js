//* Uma tela que simule a autenticação no sistema. Deverá ser solicitado login e senha. Se o usuário informar seus dados corretamente, uma mensagem de boas-vindas deverá ser exibida, caso, contrario, este somente poderá errar tres vezes.
const readline = require('readline-sync');

let login = 'admin';
let senha = '123';
let tentativas = 3;

while (tentativas > 0) {
    let log = readline.question('Digite o login: ');
    let sen = readline.question('Digite a senha: ');
    
    
    if (log === login && sen === senha) {
        console.log('Bem-vindo ao sistema!');
        break;
} else {
    console.log('Login ou senha incorretos. Tente novamente.');
    tentativas--;
}
}

if (tentativas === 0) {
    console.log('Muitas tentativas, tente novamente mais tarde.');
    console.log('üı████§☻§☻☻Ì♣♠♦♥☻☺•◘○◙♂♀♪►◄↕‼¶§▬↨♫☼↑↓↓←∟↔▲▼ !$%&')
}


