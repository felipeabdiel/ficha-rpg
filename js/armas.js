class Armas extends Itens {
    constructor(nome, peso, dano, tipo, efeito, descricao) {
        super(nome, descricao, efeito);
        this.peso = peso;
        this.dano = dano;
        this.tipo = tipo;
    }
}