let box = document.querySelector('.box');
let boxLayer = document.createElement('div');
let body = document.querySelector('.body');
let instagram = document.querySelector('.instagram');

boxLayer.classList.add('box-layer');
boxLayer.style.visibility = 'hidden';

box.appendChild(boxLayer);
boxLayer.appendChild(instagram);

box.addEventListener('mouseenter', () => {
    boxLayer.style.visibility = 'visible';
});

box.addEventListener('mouseleave', () => {
    boxLayer.style.visibility = 'hidden';
});

box.addEventListener('click', () => {
    boxLayer.style.visibility = 'visible';
})