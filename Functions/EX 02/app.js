let primeiroNumero =parseInt( prompt("Escreva o primeiro numero: "));
let segundoNumero = parseInt(prompt("Escreva o segundo numero: "));

console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);


function somarNumeros(x , y){
    console.log(parseInt(x + y));
}

somarNumeros(primeiroNumero + segundoNumero);