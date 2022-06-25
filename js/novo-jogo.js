// Word list 
var list = ['giu', 'bebs', 'alura', 'caelum', 'curious', 'popiloto'];

var random;

var letterCount;

// Start new game
function newGame() {
    tries = 0;

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
        input.classList.add('letter');
        input.readOnly = true;
        container.appendChild(input);
    }

    
    for(var i = 0; i < 7; i++) {
        let img = document.querySelector('#hangman' + i);
        img.classList.remove('img__hidden');
        if(i == 6) {
            return;
        }
        img.classList.add('img__hidden');
    }


    console.log(random, list[random], letterCount);
    return [random, letterCount];
}



// Add new word to list
function addNewWord() {
    let input = document.getElementById('addWord').value;
    list.push(input);
    console.log(input);
}

