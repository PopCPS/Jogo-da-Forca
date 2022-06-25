var input;

function addNewWord() {
    input = document.querySelector('#addWordInput').value;
    console.log(input);
    if(!input == '') {
        list.push(input);
    }else {
        return;
    }
}

function validate() {
    if (input == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(input)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
}