//DOM element find by HTML id
let numContainer = document.getElementById('num')
//Initialize value
let value = 0;
//DOM element find HTML elements by CSS selectors
let btnInc = document.querySelector('.inc')
let btnDec = document.querySelector('.dec')
let btnReset = document.querySelector('.reset')
//Event listener to increment (counter) value
btnInc.addEventListener('click', () => {
    value++;
    numContainer.textContent = value;
});
//Event listener to decrement value
btnDec.addEventListener('click', () => {
    value--;
    numContainer.textContent = value;
});
//Event listener to reset value
btnReset.addEventListener('click', () => {
    value = 0;
    numContainer.textContent = value;
});