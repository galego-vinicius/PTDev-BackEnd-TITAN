const fs = require('fs') // file system (core module)

fs.readFile('arquivo.txt', 'utf8', (err, data) => { 

    if (err) {
        console.log(erro)
    }
    console.log(data);
})