const express = require('express')

const app = express()
const port = 3000 // variável ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates') // a pasta 3_render_html é o basePath. Estamos entrando na 
// pasta de templates, então __dirname é a pasta 3_render_html também e 'templates' é a pasta que queremos entrar 

const checkAuth = function(req, res, next){

    req.authStatus = true

    // Começo do middleware
    if(req.authStatus){
        console.log('Está logado. Pode continuar!')
        next()
    } else {
        console.log('Não está logado. Faça o login para continuar!')
        next()
    }
}

app.use(checkAuth) //Chamando o MIDDLEWARE

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})