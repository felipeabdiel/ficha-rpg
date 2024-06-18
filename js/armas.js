class armas{
    constructor(nome, dano, tipo, efeito){
        this.nome = nome;
        this.dano = dano;
        this.tipo = tipo;
    }

    getDano(){
        return this.dano;
    }

    getTipo(){
        return this.tipo;
    }

    getNome(){
        return this.nome;
    }

    getEfeito(){
        return this.efeito;
    }
}

