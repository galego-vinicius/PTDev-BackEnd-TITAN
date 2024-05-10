const _ = require('lodash') // terminal npm install lodash
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a,b) //Diferença entre as duas arrays

console.log(chalk.red(diff))

// Acrescentei 'start' no package json
