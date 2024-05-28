function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Vinicius", lang: "JS"},
                {name: "Lima", lang: "C#"},
                {name: "Daniel", lang: "Java"}
            ])
        }, 2000);
    })
}

async function principal(){

    pegarUsuarios().then(usuarios => {
        console.log(usuarios)
    })
    console.log("OLÁ")

    /*
    var usuarios = await pegarUsuarios();
    console.log(usuarios)
    console.log("OLÁ")
    */
}

principal()