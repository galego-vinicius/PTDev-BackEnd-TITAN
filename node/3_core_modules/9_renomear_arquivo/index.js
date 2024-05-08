const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoarquivo.txt'

fs.rename(arqAntigo, arqNovo, function(err){

    if(err){
        console.log(err)
    }
    console.log('arquivo renomeado!')
})