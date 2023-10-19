class Carrinho{
    constructor(itens, quantidadeTotal, valorTotal){
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    addItem(item){
        let contador = 0;

        for(let itemCarrinho in this.itens ){
            //UTILIZANDO O OPERADOR "in" RETORNARA UM INDICE NA VARIAVEL "itemCarrinho".
            //DESSA MANEIRA TEREMOS UM LAÇO DO TAMANHO EXATO DO ARRAY, MAS TAMBEM PODERIA SER UTILIZADO O METODO "legth".

            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.quantidadeTotal += item.qtd;
        this.valorTotal += item.qtd * item.preco;
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj){return obj.id == item.id})
                this.itens.splice(index, 1);
                console.log("esse é o index = " + index)
            }
        }
    }
}

let primeiroCarrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 3,
        preco: 45
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 70
    }
], 5, 275);


primeiroCarrinho.addItem({
        id: 3, 
        nome: "Bone", 
        qtd: 2, 
        preco: 45});

primeiroCarrinho.addItem({
    id: 1,
    nome: "Camisa",
    qtd: 2,
    preco: 45
})

primeiroCarrinho.removeItem({
    id: 1,
    nome: "Camisa",
    qtd: 1,
    preco: 45
})

console.log(primeiroCarrinho);



