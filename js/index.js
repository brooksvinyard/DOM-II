// Your code goes here


// 1 - Makes text you click change font
const containerSelect = document.querySelector('.home');
containerSelect.addEventListener('click', e => {
    e.target.style.fontFamily = "Indie Flower";
});
