var list = ['giu', 'bebs', 'alura', 'caelum', 'curious', 'popiloto'];

function newGame() {
    const random = Math.floor(Math.random() * list.length);

    var letterCount = list[random].replace(/\s+/g, '').length;

    /*Clear inputs*/
    const container = document.getElementById('container');
    container.replaceChildren();

    /*Create inputs*/
    for(var inputAmount = 0; inputAmount < letterCount; inputAmount++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = "1";  
        input.className = "css-class-name";
        input.class = 'letter'
        container.appendChild(input);
    }

    /*Locate the letters */
    
    
    console.log(random, list[random], letterCount);
    return random;
}

function addNewWord() {
    let input = document.getElementById('addWord').value;
    list.push(input);
    console.log(input);
}

function myKeyPress(e){
    var keynum;
  
    if(window.event) { // IE                  
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
      keynum = e.which;
    }
  
    alert(String.fromCharCode(keynum));
  }