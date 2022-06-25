var body = document.querySelector('.app');

var tries = 0;

body.addEventListener('keydown', function(event) {
    var key = event.key;

    if(list[random].includes(key)) {
        
        for(var i = 0; i < letterCount; i++) {
          
            if(list[random].charAt(i) == key && tries < 6) {
                
                var letter = document.querySelector('.letter' + i)
                letter.value = key;
                console.log(tries);
            }              
        }
    }else {
        var img;
        
        tries++;

        console.log(tries + 'tries');

        if(tries == 1) {
            img = document.querySelector('#hangman6');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman5');
            img.classList.remove('img__hidden');
        }else if(tries == 2) {
            img = document.querySelector('#hangman5');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman4');
            img.classList.remove('img__hidden');
        }else if(tries == 3) {
            img = document.querySelector('#hangman4');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman3');
            img.classList.remove('img__hidden');
        }else if(tries == 4) {
            img = document.querySelector('#hangman3');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman2');
            img.classList.remove('img__hidden');
        }else if(tries == 5) {
            img = document.querySelector('#hangman2');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman1');
            img.classList.remove('img__hidden');
        }else if(tries == 6) {
            img = document.querySelector('#hangman1');
            img.classList.add('img__hidden');
            img = document.querySelector('#hangman0');
            img.classList.remove('img__hidden');
            img.classList.remove('letter');
            
        }
    }
})
