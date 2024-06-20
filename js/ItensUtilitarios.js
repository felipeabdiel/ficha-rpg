class ItensUtilitarios extends Itens {
    constructor(nome, descricao, efeito){
        super(nome, descricao, efeito);
    }

    getNome(){
        return this.nome;
    }

    getDescricao(){
        return this.descricao;
    }

    getEfeito(){
        return this.efeito;
    }

}

