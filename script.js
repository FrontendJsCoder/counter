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

let toggleBtn = document.getElementById('toggle-btn')
let menuItems = document.querySelectorAll('.menu a')
let menuActive = false;

toggleBtn.addEventListener('click', () => {
    if (!menuActive) {
        menuItems[0].style.transform = 'translate(120px,0)';
        menuItems[1].style.transform = 'translate(100px,55px)';
        menuItems[2].style.transform = 'translate(55px,100px)';
        menuItems[3].style.transform = 'translate(0,120px)';
        menuActive = true;
        toggleBtn.classList.add('active')
    }else {
        menuItems.forEach((menuItem) => {
            menuItem.style.transform = 'translate(0.0)';
        });
        menuActive = false;
        toggleBtn.classList.remove('active');
    }
});