// Word list 
var list = ['giu', 'bebs', 'alura', 'caelum', 'curious', 'popiloto'];

// Start new game
function newGame() {
    const random = Math.floor(Math.random() * list.length);

    var letterCount = list[random].replace(/\s+/g, '').length;

    // Clear inputs
    const container = document.getElementById('container');
    container.replaceChildren();

    // Create inputs
    for(var inputAmount = 0; inputAmount < letterCount; inputAmount++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = "1";  
        input.className = "letter" + inputAmount;
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

