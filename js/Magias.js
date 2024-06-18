class Magias{

    constructor(nome, dano, tipo, alcance, area, duracao, materiais, descricao){
        this.nome = nome;
        this.dano = dano;
        this.tipo = tipo;
        this.alcance = alcance;
        this.area = area;
        this.duracao = duracao;
        this.materiais = materiais;
        this.descricao = descricao;
    }

    getMagiaInfo(){
        return `Nome: ${this.nome}, Dano: ${this.dano}, Tipo: ${this.tipo}, Alcance: ${this.alcance}, ��rea: ${this.area}, Duração: ${this.duracao}, Materiais: ${this.materiais}, Descrição: ${this.descricao}`;
    }
}

export default Magias;