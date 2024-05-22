// ----------------------------- INICIO DA PROGRAMAÇÃO ASSINCRONA ---------------------------------------------
// Função de SetTimeout: Função de setar um tempo para executar a função. O setTimeout já é assincrono nativamente.
// Ex: 

// setTimeout(() => {
//     console.log('Meu nome é vinicius')
// }, 1000);

function enviarEmail (corpo, para) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------------
        Corpo do email: ${corpo}
        ----------------------------
        De: Vinícius Félix
        `)
    }, 2000);
}

console.log('Inicio de envio do e-mail')
enviarEmail("Oi, seja bem-vindo ao Guia", "vinicius@hotmail.com")
console.log('Seu e-mail foi enviado. Deve chegar em minutos!')
console.log('TUDO OK!')