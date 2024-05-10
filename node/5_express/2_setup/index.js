const express = require('express')

const app = express()
const port = 3000 // variável ambiente

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})