const chalk = require("chalk");

const nota = 4

if (nota >= 7){
    console.log(chalk.green('Parabéns! Você está aprovado.'))
} else {
    console.log(chalk.bgRed('Você precisa realizar a prova de recuperação.'))
}
