
function show() {
    var name = document.getElementById('name').value;
    if (document.getElementById('name').value == "") {
        alert('Please type your name');
    }
    else {
        document.getElementById('addname').innerHTML = name;

        document.getElementById('main').style.display = "none"

        document.getElementById('c1').style.display = "block"

    }

}


let answer = document.getElementById('answer');
let displayOption = document.getElementById('displayOption');

answer.onchange = function () {
    let heranswer = answer.value;

    switch (heranswer) {
        case "yes":
            displayOption.innerHTML = 'Oh,Really?😶‍🌫️';
            break;
        case "no":
            displayOption.innerHTML = 'Why?😕'
            break;
        default:
            displayOption.innerHTML = 'Please Answer';
            break;
    }
}