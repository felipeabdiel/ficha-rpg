class Personagem {
    constructor(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma) {
      this.nome = nome;
      this.forca = forca;
      this.destreza = destreza;
      this.constituicao = constituicao;
      this.inteligencia = inteligencia;
      this.sabedoria = sabedoria;
      this.carisma = carisma;
      this.nivel = 1; // Nível inicial padrão
      this.classe = ""; // Classe inicial vazia
      this.experiencia = 0; // Experiência inicial
      this.itens = []; // Inventário inicial vazio
    }
  
    // Método para obter o nome do personagem
    getNome() {
      return this.nome;
    }
  
    // Método para obter um atributo específico
    getAtributo(atributo) {
      if (!this.hasOwnProperty(atributo)) {
        throw new Error(`Atributo inválido: ${atributo}`);
      }
      return this[atributo];
    }
  
    // Método para obter o modificador de um atributo
    getModificador(atributo) {
      return Math.floor((this.getAtributo(atributo) - 10) / 2);
    }
  
    // Método para definir o nível do personagem
    setNivel(nivel) {
      if (isNaN(nivel) || nivel < 1) {
        throw new Error("Nível inválido: deve ser um número maior ou igual a 1");
      }
      this.nivel = nivel;
    }
  
    // Método para obter o nível do personagem
    getNivel() {
      return this.nivel;
    }
  
    // Método para definir a classe do personagem
    setClasse(classe) {
      this.classe = classe;
    }
  
    // Método para obter a classe do personagem
    getClasse() {
      return this.classe;
    }
  
    // Método para adicionar experiência ao personagem
    adicionarExperiencia(experiencia) {
      if (isNaN(experiencia) || experiencia < 0) {
        throw new Error("Experiência inválida: deve ser um número maior ou igual a 0");
      }
      this.experiencia += experiencia;
    }
  
    // Método para verificar se o personagem subiu de nível
    subiuDeNivel() {
      // Implementar lógica para verificar se a experiência atual é suficiente para subir de nível
      // Retornar true se o personagem subiu de nível, false caso contrário
      return false; // Implementar a lógica de verificação de nível
    }
  
    // Método para subir de nível (se possível)
    subirNivel() {
      if (this.subiuDeNivel()) {
        // Implementar lógica para subir de nível (aumento de nível, pontos de habilidade, etc.)
        this.nivel++; // Aumentar o nível
        // ... (Implementar outras ações de subir de nível)
      }
    }
  
    // Método para adicionar um item ao inventário
    adicionarItem(item) {
      if (!item) {
        throw new Error("Item inválido: o item não pode ser nulo ou indefinido");
      }
      this.itens.push(item);
    }
  
    // Método para remover um item do inventário por índice
    removerItemPorIndice(indice) {
      if (isNaN(indice) || indice < 0 || indice >= this.itens.length) {
        throw new Error("Índice inválido: deve ser um número não negativo menor que o tamanho do inventário");
      }
      this.itens.splice(indice, 1);
    }
  
    // Método para remover um item do inventário por referência
    removeItemPorReferencia(item) {
      if (!item) {
        throw new Error("Item inválido: o item não pode ser nulo ou indefinido");
      }
      const index = this.itens.indexOf(item);
      if (index === -1) {
        throw new Error("Item não encontrado no inventário");
      }
      this.itens.splice(index, 1);
    }
  
    // Método para obter todos os itens do inventário
    getInventario() {
      return this.itens;
    }
}