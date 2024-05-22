// ----------------------------- INICIO DA PROGRAMAÇÃO ASSINCRONA ---------------------------------------------
// Função de SetTimeout: Função de setar um tempo para executar a função. O setTimeout já é assincrono nativamente.
// Ex: 

// setTimeout(() => {
//     console.log('Meu nome é vinicius')
// }, 1000);

function enviarEmail (corpo, para, callback) {
    var error = true

    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------------
        Corpo do email: ${corpo}
        ----------------------------
        De: Vinícius Félix
        `)

        if(error){
            callback("O envio de email falhou!", 0, error)
        } else {
            callback("Ok", qntPessoas()) 
        }
    }, 2000);
}

console.log('Inicio de envio do e-mail')
enviarEmail("Oi, seja bem-vindo ao Guia", "vinicius@hotmail.com", (status, qntPessoas, error) => {
    if (error === undefined){
        console.log(`Seu e-mail foi enviado para ${qntPessoas} pessoas. Deve chegar em minutos!`)
        console.log(`Status do envio: ${status}`)
    } else{
        console.log(`Ocorreu um erro: ${status}`)
    }
})

function qntPessoas(){
    return 5
}