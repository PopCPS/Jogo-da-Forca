var input;

function addNewWord() {
    input = document.querySelector('.conteudo__menu__input');
    if(!input.value == '') {
        list.push(input.value);
        input.value= '';
    }else {
        return;
    }
}