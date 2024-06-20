const nome = getElementById('nome').value;
const constituicao = parseInt(getElementById('constituicao').value);
const forca = parseInt(getElementById('forca').value);
const destreza = parseInt(getElementById('destreza').value);
const inteligencia = parseInt(getElementById('inteligencia').value);
const sabedoria = parseInt(getElementById('sabedoria').value);
const carisma = parseInt(getElementById('carisma').value);

const personagem = new Personagem(nome, forca, destreza, constituicao, inteligencia, sabedoria, carisma);

const characterDisplay = document.getElementById('character-display');
    characterDisplay.innerHTML = `
        <h2>Personagem Criado</h2>
        <p>Nome: ${personagem.nome}</p>
        <p>Nível: ${personagem.nivel}</p>
        <p>Força: ${personagem.forca} (Modificador: ${personagem.getModificadorForca()})</p>
        <p>Destreza: ${personagem.destreza} (Modificador: ${personagem.getModificadorDestreza()})</p>
        <p>Constituição: ${personagem.constituicao} (Modificador: ${personagem.getModificadorConstituicao()})</p>
        <p>Inteligência: ${personagem.inteligencia} (Modificador: ${personagem.getModificadorInteligencia()})</p>
        <p>Sabedoria: ${personagem.sabedoria} (Modificador: ${personagem.getModificadorSabedoria()})</p>
        <p>Carisma: ${personagem.carisma} (Modificador: ${personagem.getModificadorCarisma()})</p>
    `;



