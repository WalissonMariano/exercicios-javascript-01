let menosNumeros = [1, 2,3];
let maisNumeros = [1, 2,3,4,5,6,7,8,9,10];

function verificarTamanho(x){
    if(x.length<5){
        console.log("Poucos elementos no console!")
    }else if(x.length>=5){
        console.log("Muitos elementos no console!")
    }
}

verificarTamanho(menosNumeros);
