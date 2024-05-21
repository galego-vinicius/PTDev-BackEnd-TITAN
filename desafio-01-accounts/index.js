// chalk -> npm i chalk@4.1.2
// inquirer -> npm install --save inquirer@^8.0.0
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const chalk = require('chalk');
const inquirer = require('inquirer')
const fs = require('fs')

// ---------------------------------- COMO EU REALIZEI ANTES DO VIDEO ------------------------------------

// let nomeConta = '';
// let saldoConta = 0;

// function exibirMenu() {
//     console.log('O que você deseja fazer?');
//     console.log('-----------------------------------');
//     console.log('Criar conta');
//     console.log('Consultar saldo');
//     console.log('Depositar');
//     console.log('Sacar');
//     console.log('Sair');
//     console.log(' ');

//     readline.question('', (choice) => {
//         if (choice === 'Criar conta') {
//             console.log(chalk.green('Parabéns por escolher nosso banco!'));
//             console.log(chalk.green('Defina as opções da sua conta a seguir.'));
//             readline.question('Digite um nome para sua conta: ', (nome) => {
//                 console.log(chalk.green('Parabéns! Sua conta foi criada com sucesso.'));
//                 nomeConta = nome;
//                 exibirMenu(); // chamada da função movida para cá
//             });
//         } else if (choice === 'Consultar saldo') {
//             readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
//                 if (nomeContaVerificacao === nomeConta) {
//                     console.log(chalk.blue(`Olá, ${nomeConta}! o saldo da sua conta é de R$${saldoConta}.`));
//                 } else {
//                     console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
//                 }
//                 exibirMenu(); // chamada da função movida para cá
//             });
//         } else if (choice === 'Depositar') {
//             readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
//                 if (nomeContaVerificacao === nomeConta) {
//                     readline.question('Quanto você deseja depositar?', (valorDeposito) => {
//                         saldoConta += parseFloat(valorDeposito);
//                         console.log(chalk.bold.green(`Foi depositado o valor de ${valorDeposito} na sua conta!`));
//                         exibirMenu(); // chamada da função movida para cá
//                     });
//                 } else {
//                     console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
//                     exibirMenu(); // chamada da função movida para cá
//                 }
//             });
//         } else if (choice === 'Sacar') {
//             readline.question('Qual o nome da sua conta?', (nomeContaVerificacao) => {
//                 if (nomeContaVerificacao === nomeConta) {
//                     readline.question('Quanto você deseja sacar?', (valorSaque) => {
//                         if (parseFloat(valorSaque) <= saldoConta) {
//                             saldoConta -= parseFloat(valorSaque);
//                             console.log(chalk.bold.green(`Valor de ${valorSaque} retirado com sucesso! `));
//                         } else {
//                             console.log(chalk.bold.red(`Valor de saque maior que saldo!`));
//                         }
//                         exibirMenu(); // chamada da função movida para cá
//                     });
//                 } else {
//                     console.log(chalk.bold.red('Esta conta não existe! Escolha outro nome.'));
//                     exibirMenu(); // chamada da função movida para cá
//                 }
//             });
//         } else if (choice === 'Sair') {
//             console.log(chalk.bold.blue('Obrigado por usar o Accounts'));
//             readline.close();
//         } else {
//             console.log(chalk.bold.red('Opção inválida!'));
//             exibirMenu(); // chamada da função movida para cá
//         }
//     });
// }

// exibirMenu();



// ---------------------------------- COMO EU REALIZEI APÓS O VIDEO ------------------------------------
operation()

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que voce deseja fazer? ',
            choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
        }
    ]).then((answer) => {

        const action = answer['action']
        if (action === 'Criar conta'){
            criandoConta()
        } else if (action === 'Consultar saldo'){
            consultarSaldo()
        } else if (action === 'Depositar'){
            deposito()
        } else if (action === 'Sacar'){
            sacar()
        } else if (action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
            process.exit()
        }
    })
}

// Função para criar conta
function criandoConta(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir: '))
    construindoConta()
}

// Função para construir conta 
function construindoConta(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta: ' 
        }
    ]).then(answer => {
        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já exite, escolha outro nome!'))
            construindoConta()
            return
        }
        
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function (err){
            console.log(err)
        })

        console.log(chalk.green('Parabéns! A sua conta foi criada.'))
        operation()
    })
}

// Função Deposito
function deposito(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta? '
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!verificarConta(accountName)){
            return deposito()
        }
        inquirer.prompt([
            {
                name: 'conta',
                message: 'Quanto você deseja depositar? '
            }
        ]).then((answer) => {
            const conta = answer['conta']

            adicaoConta(accountName, conta),
            operation()
        })
    })
}

// Função de verificar se conta existe ou não
function verificarConta(accountName){
    if (!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe. Tente novamente!'))
        return false
    }
    return true
}

// Função que faz com que o montante seja depositado na conta
function adicaoConta(accountName, montante) {

    const accountData = dadosConta(accountName)

    if(!montante){
        console.log(chalk.bgRed.black('Ocorreu um erro! Tente novamente mais tarde.'))
        return deposito()
    }
    accountData.balance = parseFloat(montante) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), 
        function(err) {
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi depositado o valor de R$${montante} na sua conta!`))
}

// Função para buscar os dados da conta
function dadosConta(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}

// Função de consultar saldo
function consultarSaldo(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta? '
        }
    ]).then((answer) => {
        const accountName = answer["accountName"]

        if(!verificarConta(accountName)){
            return consultarSaldo()
        }

        const accountData = dadosConta(accountName)

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é R$${accountData.balance}`))
        operation()
    })
}

// Função sacar da conta
function sacar(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta? '
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!verificarConta(accountName)){
            return sacar()
        }
        
        inquirer.prompt([
            {
                name: 'montante',
                message: 'Quanto você deseja sacar? '
            }
        ]).then((answer) => {
            const montante = answer['montante']

            removerMontante(accountName, montante)
        })
    })
}

//Função de remover o saque da conta
function removerMontante(accountName, montante){

    const accountData = dadosConta(accountName)

    if(!montante){
        console.log(chalk.bgRed.black('Ocorreu um erro! Tente novamente mais tarde.'))
        return removerMontante()
    }
    if(accountData.balance < montante) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return removerMontante()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(montante)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi realizado um saque deR$${montante} da sua conta!`))
    operation()
}
