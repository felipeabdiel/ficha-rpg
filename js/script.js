document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('character-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        console.log('Formulário enviado')

        // Captura os valores do formulário
        const nome = document.getElementById('name').value;
        const classe = document.getElementById('class').value;
        const nivel = parseInt(document.getElementById('level').value);
        const forca = parseInt(document.getElementById('strength').value);
        const destreza = parseInt(document.getElementById('dexterity').value);
        const constituicao = parseInt(document.getElementById('constitution').value);
        const inteligencia = parseInt(document.getElementById('intelligence').value);
        const sabedoria = parseInt(document.getElementById('wisdom').value);
        const carisma = parseInt(document.getElementById('charisma').value);

        // Cria uma nova instância da classe Personagem
        const personagem = new Personagem(nome, classe, nivel, forca, destreza, constituicao, inteligencia, sabedoria, carisma);

        // Atualiza os modificadores dos atributos
        document.getElementById('modificador-forca').textContent = `Modificador de Força: ${personagem.getModificadorForca()}`;
        document.getElementById('modificador-destreza').textContent = `Modificador de Destreza: ${personagem.getModificadorDestreza()}`;
        document.getElementById('modificador-constituicao').textContent = `Modificador de Constituição: ${personagem.getModificadorConstituicao()}`;
        document.getElementById('modificador-inteligencia').textContent = `Modificador de Inteligência: ${personagem.getModificadorInteligencia()}`;
        document.getElementById('modificador-sabedoria').textContent = `Modificador de Sabedoria: ${personagem.getModificadorSabedoria()}`;
        document.getElementById('modificador-carisma').textContent = `Modificador de Carisma: ${personagem.getModificadorCarisma()}`;

        // Exibe os valores do personagem criado
        const characterDisplay = document.getElementById('character-display');
        characterDisplay.innerHTML = `
            <h2>Personagem Criado</h2>
            <p>Nome: ${personagem.nome}</p>
            <p>Classe: ${personagem.classe}</p>
            <p>Nível: ${personagem.nivel}</p>
            <p>Força: ${personagem.forca} (Modificador: ${personagem.getModificadorForca()})</p>
            <p>Destreza: ${personagem.destreza} (Modificador: ${personagem.getModificadorDestreza()})</p>
            <p>Constituição: ${personagem.constituicao} (Modificador: ${personagem.getModificadorConstituicao()})</p>
            <p>Inteligência: ${personagem.inteligencia} (Modificador: ${personagem.getModificadorInteligencia()})</p>
            <p>Sabedoria: ${personagem.sabedoria} (Modificador: ${personagem.getModificadorSabedoria()})</p>
            <p>Carisma: ${personagem.carisma} (Modificador: ${personagem.getModificadorCarisma()})</p>
        `;
    });

    // Atualiza os modificadores dos atributos em tempo real
    document.querySelectorAll('#strength, #dexterity, #constitution, #intelligence, #wisdom, #charisma').forEach(input => {
        input.addEventListener('input', function() {
            const forca = parseInt(document.getElementById('strength').value) || 0;
            const destreza = parseInt(document.getElementById('dexterity').value) || 0;
            const constituicao = parseInt(document.getElementById('constitution').value) || 0;
            const inteligencia = parseInt(document.getElementById('intelligence').value) || 0;
            const sabedoria = parseInt(document.getElementById('wisdom').value) || 0;
            const carisma = parseInt(document.getElementById('charisma').value) || 0;

            document.getElementById('modificador-forca').textContent = `Modificador de Força: ${Math.floor((forca - 10) / 2)}`;
            document.getElementById('modificador-destreza').textContent = `Modificador de Destreza: ${Math.floor((destreza - 10) / 2)}`;
            document.getElementById('modificador-constituicao').textContent = `Modificador de Constituição: ${Math.floor((constituicao - 10) / 2)}`;
            document.getElementById('modificador-inteligencia').textContent = `Modificador de Inteligência: ${Math.floor((inteligencia - 10) / 2)}`;
            document.getElementById('modificador-sabedoria').textContent = `Modificador de Sabedoria: ${Math.floor((sabedoria - 10) / 2)}`;
            document.getElementById('modificador-carisma').textContent = `Modificador de Carisma: ${Math.floor((carisma - 10) / 2)}`;
        });
    });
});