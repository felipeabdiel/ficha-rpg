import Personagem from './Personagem.js';

class Monge extends Personagem {
    constructor(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma, armaduraSoN) {
        super(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma);
        this.armaduraSoN = armaduraSoN; // Usa ou não armadura? Se não, a CA entra no método getCAsemArmadura()
    }

    getCASemArmadura() {
        Armaduras.CA = 10 + this.getModificador(sabedoria) + this.getModificador(destreza); // CA sem armadura do monge é calculada de forma diferente
    }
}