const path = require('path')

// path absoluto

console.log(path.resolve('teste.txt'))

// formar um Path
const midFolder = 'relatorios'
const fileName = 'vinicius.txt'
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)