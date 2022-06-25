const body = document.querySelector('.app');

const mistakesTextArea = document.querySelector('#mistakes');

const txt = document.querySelector('.conteudo__forca__txt__perdeu');

const novoJogo = document.querySelector('#newGame');
const novaPalavra = document.querySelector('#addWord');

var foco;

var tries = 0;

var mistakes = [];

body.addEventListener('keydown', function(event) {

    foco = document.querySelector('#addWordInput') === document.activeElement;
    
    var key = event.key;

    
    if(event.keyCode > 54 && event.keyCode < 91 && foco == false) {
        if(list[random].includes(key)) {
            
            for(var i = 0; i < letterCount; i++) {
            
                if(list[random].charAt(i) == key && tries < 6) {
                    
                    var letter = document.querySelector('.letter' + i)
                    letter.value = key;
                }              
            }
        }else {
            var img;
            

            if(mistakes.indexOf(key) === -1) {
                mistakes.push(key);
            }else {
                return;
            }

            for(var i = 0; i < mistakes.length; i++) {
                if(mistakes.length > 6) {
                    return
                } 
                mistakesTextArea.value = mistakes;
            }

            tries++;

            if(tries == 1) {
                img = document.querySelector('#forca6');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca5');
                img.classList.remove('img__hidden');
            }else if(tries == 2) {
                img = document.querySelector('#forca5');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca4');
                img.classList.remove('img__hidden');
            }else if(tries == 3) {
                img = document.querySelector('#forca4');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca3');
                img.classList.remove('img__hidden');
            }else if(tries == 4) {
                img = document.querySelector('#forca3');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca2');
                img.classList.remove('img__hidden');
            }else if(tries == 5) {
                img = document.querySelector('#forca2');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca1');
                img.classList.remove('img__hidden');
            }else if(tries == 6) {
                img = document.querySelector('#forca1');
                img.classList.add('img__hidden');
                img = document.querySelector('#forca0');
                img.classList.remove('img__hidden');
                txt.classList.remove('txt__hidden');
            }
        }
    }
})
   