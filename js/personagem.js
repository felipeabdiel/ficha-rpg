class Personagem{
    constructor(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma){
        this.nome = nome;
        this.forca = forca;
        this.destreza = destreza;
        this.constituicao = constituicao;
        this.inteligencia = inteligencia;
        this.sabedoria = sabedoria;
        this.carisma = carisma;
        this.itens = [];
    }

    getNome(){
        return this.nome;
    }

    getAtributo(atributo){
        return this[atributo];
    }

    getModificador(atributo){
        return Math.floor((this.getAtributo(atributo) - 10) / 2);
    }

    
}

export default Personagem;