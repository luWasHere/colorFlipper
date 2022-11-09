
const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const randomBtn = document.getElementById('random');
const showBtn = document.getElementById('show');
const inputElem = document.getElementById('input');
const $inputElem = document.querySelector('.form-input')

inputElem.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        showBtn.click();
    };
});

const randomInput = () => {

    function generateRandomHex() {
        let hexCodeRandom = "";
        let generateRandomNumber = () => {
            let random = Math.floor(Math.random() * hexArray.length);
            let randomNumber = hexArray[random].toString();
            return randomNumber;
        };
        for(let i = 0; i < 6; i++) {
            if(hexCodeRandom.length < 6) {
                let randomNumber = generateRandomNumber();
                hexCodeRandom = hexCodeRandom.concat(randomNumber);
            } else {
                return hexCodeRandom;
            };
        };
        return hexCodeRandom;
    };
    let title = document.querySelector('.title');

    function randomColor() {
        let randomCode = generateRandomHex();
        document.body.style.background = `#${randomCode}`;
        title.style.color = `#${randomCode}`;
        inputElem.removeAttribute('value');
        inputElem.setAttribute('value', `${randomCode}`);
        // showBtn.click();

        let par = document.getElementById('i1');
        let errorPar = document.getElementById('i2');
        if(par.style.display = "none") {
            errorPar.style.display = "none";
            par.style.display = "block";
        };
    };
    randomColor();
};

const showInput = () => {
    let inputValue = document.getElementById('input').value;
    let value = inputValue.toLowerCase();
    // document.body.style.background = `#${value}`;
    let hexCode = "#";

    function check() {

        for (let i = 0; i < value.length; i++) {

            if(hexArray.some(elem => elem == value[i])) {
                let chars = "";
                let char = value[i];
                chars = chars.concat(char);
                hexCode = hexCode.concat(chars);
            } else {     
                return hexCode = "#";
            };
        }
        return hexCode;
    }
    let hex = check();
    let par = document.getElementById('i1');
    let errorPar = document.getElementById('i2');
    let title = document.querySelector('.title');

    // console.log(hex.length)

    if(hex.length != 7 && hex.length != 4) {
        hex = "#"
    };
    // console.log(hex)

    if(hex === "#") {
        par.style.display = "none";
        errorPar.style.display = "block";
        errorPar.style.color = "#f00";
        
    } else {

        if(par.style.display = "none") {
            errorPar.style.display = "none";
            par.style.display = "block";
        };
        let hexValue = hexCode.substring(1,7);
        // console.log(hexValue)
        inputElem.removeAttribute('value');
        inputElem.setAttribute('value', `${hexValue}`)
        document.body.style.background = `${hexCode}`;
        title.style.color = `${hexCode}`;
    };
};

