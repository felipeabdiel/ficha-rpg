class Armaduras extends Itens {
    constructor(nome, peso, ca, efeito, descricao) {
        super(nome, descricao, efeito);
        this.peso = peso;
        this.ca = ca;
    }

    //CA é Classe de Armadura (Class Armor)

}

export default Armaduras;

