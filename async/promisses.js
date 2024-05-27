// Uma promisse é uma alternativa para o callback
function enviarEmail(corpo, para){
 return new Promise((resolve, reject) => {

// "Eu prometo que...", resolve => caso dê certo e Reject => Caso dê errado
        setTimeout(() => {

            var deuErro = false;
            if(!deuErro){
                console.log("Enviando email...")
                resolve({time: 6, to: "gabriel1234@gmail.com"}) // Promessa OK!
            } else{
                reject("Fila cheia!") // Deu erro!
            }
        }, 4000)
    })
}

/*
enviarEmail("Ola mundo", "vinicius12345@gmail.com").then((time, to) => {
    console.log(`
    Email enviado!
    ---------------------
    Time: ${time}
    To: ${to}
    `)
}).catch((erro) => {
    console.log("Houve algum erro. " + erro)
})
*/

// Resolve -> Then // Reject -> Catch.

// ------------------------------------------------------------------------------------------------------------------------

// Promises aninhadas (Promise Hell)

function pegarId(){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(5)
        }, 2000);
    }
)}

function buscarEmailNoBanco(){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("lucas12345@hotmail.com")
        }, 500);
    }
)}

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail(email).then(() => {
            console.log("Email enviado para usuario com id: " + id)
        })
    })
})

