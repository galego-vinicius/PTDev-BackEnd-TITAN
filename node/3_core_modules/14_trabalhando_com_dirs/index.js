const fs = require('fs')

if(!fs.existsSync('./minhapasta')){ //Verifica se existe a pasta
    console.log("Não existe!")
    fs.mkdirSync('minhapasta') //Cria pasta
}

if(fs.existsSync('./minhapasta')){
    console.log("Existe!")
}