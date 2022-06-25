// Word list 
var list = ['giu', 'bebs', 'alura', 'caelum', 'curious', 'popiloto', 'breno loa'];

var random;

var letterCount;

// Start new game
function newGame() {
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
        container.appendChild(input);
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

