var body = document.querySelector('.app');

var values = newGame();

var letterCount = values[1];

body.addEventListener('keydown', function(event) {
    const key = event.key;

    if(list[values[0]].includes(key)) {
        
        for(var i = 0; i < letterCount; i++) {
          
            if(list[values[0]].charAt(i) == key) {
                
                var letter = document.querySelector('.letter' + i)
                letter.value = key;
            }

            console.log(list[values[0]].charAt(i));            
        }
    }
})

