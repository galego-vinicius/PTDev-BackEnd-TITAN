const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200 // Bem Sucedida
    res.setHeader('Contenty-Type', 'text/html') // Mudando de texto para HTML
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})