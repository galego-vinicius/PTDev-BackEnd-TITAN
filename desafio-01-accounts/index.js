// chalk -> npm i chalk@4.1.2
// inquirer -> npm install --save inquirer@^8.0.0
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const chalk = require('chalk');

let nomeConta = '';
let saldoConta = 0;

function exibirMenu() {
    console.log('O que você deseja fazer?');
    console.log('-----------------------------------');
    console.log('Criar conta');
    console.log('Consultar saldo');
    console.log('Depositar');
    console.log('Sacar');
    console.log('Sair');
    console.log(' ');

    readline.question('', (choice) => {
        if (choice === 'Criar conta') {
            console.log(chalk.green('Parabéns por escolher nosso banco!'));
            console.log(chalk.green('Defina as opções da sua conta a seguir.'));
            readline.question('Digite um nome para sua conta: ', (nome) => {
                console.log(chalk.green('Parabéns! Sua conta foi criada com sucesso.'));
                nomeConta = nome;
                exibirMenu(); // chamada da função movida para cá
            });
        } else if (choice === 'Consultar saldo') {
            readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
                if (nomeContaVerificacao === nomeConta) {
                    console.log(chalk.blue(`Olá, ${nomeConta}! o saldo da sua conta é de R$${saldoConta}.`));
                } else {
                    console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
                }
                exibirMenu(); // chamada da função movida para cá
            });
        } else if (choice === 'Depositar') {
            readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
                if (nomeContaVerificacao === nomeConta) {
                    readline.question('Quanto você deseja depositar?', (valorDeposito) => {
                        saldoConta += parseFloat(valorDeposito);
                        console.log(chalk.bold.green(`Foi depositado o valor de ${valorDeposito} na sua conta!`));
                        exibirMenu(); // chamada da função movida para cá
                    });
                } else {
                    console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
                    exibirMenu(); // chamada da função movida para cá
                }
            });
        } else if (choice === 'Sacar') {
            readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
                if (nomeContaVerificacao === nomeConta) {
                    readline.question('Quanto você deseja sacar?', (valorSaque) => {
                        if (parseFloat(valorSaque) <= saldoConta) {
                            saldoConta -= parseFloat(valorSaque);
                            console.log(chalk.bold.green(`Valor de ${valorSaque} retirado com sucesso! `));
                        } else {
                            console.log(chalk.bold.red(`Valor de saque maior que saldo!`));
                        }
                        exibirMenu(); // chamada da função movida para cá
                    });
                } else {
                    console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
                    exibirMenu(); // chamada da função movida para cá
                }
            });
        } else if (choice === 'Sair') {
            console.log(chalk.bold.blue('Obrigado por usar o Accounts'));
            readline.close();
        } else {
            console.log(chalk.bold.red('Opção inválida!'));
            exibirMenu(); // chamada da função movida para cá
        }
    });
}

exibirMenu();


