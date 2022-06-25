var body = document.querySelector('.app');


body.addEventListener('keydown', function(event) {
    const key = event.key;

    if(list[random].includes(key)) {
        
        for(var i = 0; i < letterCount; i++) {
          
            if(list[random].charAt(i) == key) {
                
                var letter = document.querySelector('.letter' + i)
                letter.value = key;
            }

            console.log(list[random].charAt(i));            
        }
    }else{
        
    }
        
    
})

