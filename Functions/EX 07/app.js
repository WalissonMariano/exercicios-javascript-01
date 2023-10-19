let frase = "teste teste teste";

function tamanhoFrase(x){
    if(x.length <10){
        console.log("Texto dentro do limite!")
    }else if(x.length>10){
        console.log("Texto muito longo!")
    }
}

tamanhoFrase(frase);