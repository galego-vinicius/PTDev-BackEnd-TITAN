const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    res.write('Oi HTTP') // Enviando através de texto somente (E não HTML)
    res.end()

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})