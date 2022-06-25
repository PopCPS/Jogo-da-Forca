// Word list 
var list = ['giu', 'bebs', 'alura', 'caelum', 'curious', 'popiloto'];

var random;

var letterCount;

// Start new game
function newGame() {
    // Reset screen
    tries = 0;
    mistakes = [];
    txt.classList.add('txt__hidden');

    random = Math.floor(Math.random() * list.length);

    letterCount = list[random].replace(/\s+/g, '').length;

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

    mistakesTextArea.value = ('');
    
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
