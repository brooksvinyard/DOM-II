// Your code goes here


// 1 - Makes text you click change font
const containerSelect = document.querySelector('.home');
containerSelect.addEventListener('click', e => {
    e.target.style.fontFamily = "Indie Flower";
});

// 2/3 - On mouseover / out change the picture border radius
let adventureImgSelect = document.querySelector('.img-content img');

adventureImgSelect.addEventListener('mouseover', e => {
    e.target.style.borderRadius =  "100%";
});
adventureImgSelect.addEventListener('mouseout', e => {
    e.target.style.borderRadius =  "10px";
});

// 4 - Changes navigation background on double click
let navigationSelect = document.querySelector('.main-navigation');

navigationSelect.addEventListener('dblclick', e => {
    e.target.style.background =  "#17A2B8";
});

// 5/6 - On mouse click / release change the picture drop shadow
let funImgSelect = document.querySelector('.inverse-content img');
console.log(funImgSelect);
funImgSelect.addEventListener('mousedown', e => {
    e.target.style.boxShadow = "1px 1px 20px 10px #212529";
});
funImgSelect.addEventListener('mouseup', e => {
    e.target.style.boxShadow = "none";
});