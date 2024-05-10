const express = require('express')

const app = express()
const port = 3000 // variável ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates') // a pasta 3_render_html é o basePath. Estamos entrando na 
// pasta de templates, então __dirname é a pasta 3_render_html também e 'templates' é a pasta que queremos entrar 

// Ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Criação de usuario
app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario cadastrado é '${name}' e a idade é '${age}'`)

    res.sendFile(`${basePath}/userform.html`)

})

// Buscar por usuario
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users (por ex, para resgatar um usuario do banco) 
    console.log(`Estamos buscando pelo usuario ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

// Página principal
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

// Porta sendo ouvida
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})