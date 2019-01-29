// Your code goes here


// 1 - Makes text you click change font
const containerSelect = document.querySelector('.home');
containerSelect.addEventListener('click', e => {
    e.target.style.fontFamily = "Indie Flower";
});

// 2 - On mouseover / out change the picture border radius
let adventureImgSelect = document.querySelector('.img-content img');

adventureImgSelect.addEventListener('mouseover', e => {
    e.target.style.borderRadius =  "100%";
});
adventureImgSelect.addEventListener('mouseout', e => {
    e.target.style.borderRadius =  "10px";
});

// 3
