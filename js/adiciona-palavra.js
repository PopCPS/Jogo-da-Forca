var input;

function addNewWord() {
    input = document.querySelector('.conteudo__menu__input');
    console.log(input.value);
    if(!input.value == '') {
        list.push(input.value);
        input.value= '';
    }else {
        return;
    }
}