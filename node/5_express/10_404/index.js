const express = require('express')

const app = express()
const port = 3000 // variável ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates') // a pasta 3_render_html é o basePath. Estamos entrando na 
// pasta de templates, então __dirname é a pasta 3_render_html também e 'templates' é a pasta que queremos entrar 

const usersRoute = require('./users')

// Ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Arquivos estaticos
app.use(express.static('public'))

app.use('/users', usersRoute)

// Página principal
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

// Porta sendo ouvida
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})