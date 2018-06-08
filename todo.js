function clickHandler() {
    console.log('>button clicked: ' , inputElement.value);
    var task = inputElem.value;

    if(task== "") {
        return;

    }
    var liElem = document.createElement('li');
    liElem.textContent = task;

    ulElem.appendChild(liElem)



    inputElem.value = "";
}

function mouseEnterHandler() {
    console.log('mouse entered');
}
function mouseLeaveHandler() {
    console.log('mouse left');
}


var ulElem = document.body.querySelector('#my-todos')
var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn')
addBtnElem.addEventListener('click', clickHandler);
addBtnElem.addEventListener('mouseenter', mouseEnterHandler);
addBtnElem.addEventListener('mouseleave', mouseEnterHandler);