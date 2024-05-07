// externo
const minimist = require('minimist')

// interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

// terminal -> node .\index.js --a=2 --b=2
soma(a, b)
