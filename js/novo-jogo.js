// Word list 
var list = ['bom', 'luz', 'elo', 'lua', 'dor', 'dia', 'ato', 'sol', 'pai', 'amor', 'fato', 'vida', 'sede', 'casa', 'ruim', 'amar', 'alma', 'agir', 'caso', 'frio', 'poder', 'etnia', 'causa', 'comum', 'mundo', 'forte', 'prosa', 'certo', 'favor', 'morte', 'utopia', 'legado', 'acento', 'objeto', 'rancor', 'origem', 'mulher', 'enigma', 'limite', 'adorar', 'redimir', 'cultura', 'sucesso', 'coragem', 'colapso', 'hesitar', 'intuito', 'impacto', 'moleque', 'latente'];

var random;

var letterCount;

// Start new game
function newGame() {
    // Reset screen
    tries = 0;
    acertos = 0;
    mistakes = [];
    mistakesTextArea.value = ('');
    txtlose.classList.add('txt__hidden');
    txtwin.classList.add('txt__hidden');

    random = Math.floor(Math.random() * list.length);

    letterCount = list[random].replace(/\s+/g, '').length;

    list.splice(random, 1);

    // Clear inputs
    const container = document.getElementById('container');
    container.replaceChildren();

    // Create inputs
    for(var inputAmount = 0; inputAmount < letterCount; inputAmount++) {
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = "1";  
        input.className = "letter" + inputAmount;
        input.classList.add('conteudo__jogo__letras');
        input.readOnly = true;
        container.appendChild(input);
    }
    
    for(var i = 0; i < 7; i++) {
        let img = document.querySelector('#forca' + i);
        img.classList.remove('img__hidden');
        if(i == 6) {
            return;
        }
        img.classList.add('img__hidden');
    }

    return [random, letterCount];
}


  