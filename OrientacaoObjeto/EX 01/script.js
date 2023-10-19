class ContaBanco{
    constructor(nome, saldo){
        this.nome = nome;
        this.saldo = saldo;
    }

    getNome(){
        return this.nome;
    }
    setNome(nomeConta){
        this.nome = nomeConta;
    }

    getSaldo(){
        return this.saldo;
    }
    setSaldo(saldoConta){
        this.saldo = saldoConta;
    }

    sacar(valorSaque) {
        this.setSaldo(this.getSaldo() - valorSaque);
    }
    depositar(valorDeposito) {
        this.setSaldo(this.getSaldo() + valorDeposito);
    }
}

let primeiraConta = new ContaBanco("Ana Beatriz", 1200);

console.log(primeiraConta);

primeiraConta.depositar(1000);

console.log(primeiraConta)

primeiraConta.sacar(500);

console.log(primeiraConta);