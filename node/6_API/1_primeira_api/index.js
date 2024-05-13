// 1) npm init -y , npm install express nodemon
// 2) Abaixo está o mínimo setup para poder criar uma API node - express
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.listen(3000)

//----------------------------------------------------------------------------------------------------------------

// 3) ROTAS/ ENPOINTS

app.post('/createproduct', (req, res) => {
// Para enviar requisição pelo Postman -> Body, raw, JSON

    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    if(!name){
        res.status(422).json({message: 'O campo NOME é obrigatório!'})
    }

    res.status(201).json({message: 'O produto foi criado com sucesso'})

})

app.get('/', (req, res) => {

    res.status(200).json({message: 'Primeira rota criada com sucesso'})

})