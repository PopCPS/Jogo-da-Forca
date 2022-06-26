const teclado = document.querySelector('.conteudo__teclado__teclas');

var key;

teclado.addEventListener('click', function(event) {
    var tecla = document.querySelector('.conteudo__teclado__tecla')
    key = event.target.outerText
    
    if(event.target.id > 54 && event.target.id < 91) {

        if(list[random].includes(key)) {

            for(var i = 0; i < letterCount; i++) {
            
                if(list[random].charAt(i) == (key || keyboardKey) && tries < 6) {
                    
                    var letter = document.querySelector('.letter' + i);
                    letter.value = key;
                    
                    if(acertos !== letterCount) {
                        acertos++;
                    }
                }
                
                var vitoria = document.querySelector('.letter' + i);

                palavraVitoria = list[random].split('');

                if(acertos == letterCount) {
                    txtwin.classList.remove('txt__hidden');
                    return;
                }

            }
        }else {
            var img;
            
            if(acertos == letterCount) {
                return;
            }

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
                txtlose.classList.remove('txt__hidden');
                alert(list[random]);
            }
        }
    }
})