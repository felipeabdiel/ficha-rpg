import Personagem from './Personagem.js';

class Feiticeiro extends Personagem{
    constructor(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma, espacoDeMagia){
        super(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma);
        this.espacoDeMagia = espacoDeMagia;
    }
}

