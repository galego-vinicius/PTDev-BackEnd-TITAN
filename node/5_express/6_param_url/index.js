const express = require('express')

const app = express()
const port = 3000 // variável ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates') // a pasta 3_render_html é o basePath. Estamos entrando na 
// pasta de templates, então __dirname é a pasta 3_render_html também e 'templates' é a pasta que queremos entrar 

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users (por ex, para resgatar um usuario do banco) 
    console.log(`Estamos buscando pelo usuario ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})