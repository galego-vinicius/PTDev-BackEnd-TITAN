const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

// Criação de usuario
router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario cadastrado é '${name}' e a idade é '${age}'`)

    res.sendFile(`${basePath}/userform.html`)

})

// Buscar por usuario
router.get('/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users (por ex, para resgatar um usuario do banco) 
    console.log(`Estamos buscando pelo usuario ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router
