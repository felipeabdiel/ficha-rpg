import Personagem from './Personagem.js';

// Manipulação do formulário
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('character-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar os valores do formulário
    const nome = document.getElementById('name').value;
    const classe = document.getElementById('class').value;
    const nivel = parseInt(document.getElementById('level').value);
    const forca = parseInt(document.getElementById('strength').value) || 0;
    const destreza = parseInt(document.getElementById('dexterity').value) || 0;
    const constituicao = parseInt(document.getElementById('constitution').value) || 0;
    const inteligencia = parseInt(document.getElementById('intelligence').value) || 0;
    const sabedoria = parseInt(document.getElementById('wisdom').value) || 0;
    const carisma = parseInt(document.getElementById('charisma').value) || 0;

    // Criar objeto Personagem
    const personagem = new Personagem(nome, classe, nivel, forca, destreza, constituicao, inteligencia, sabedoria, carisma);
  });

});