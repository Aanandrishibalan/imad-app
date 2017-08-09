console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'This is another waytext change instead of origin';
var img = document.getElementById('mmm');
var marginLeft = 0;
function moveRight () {
marginLeft = marginLeft + 10;
img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
 var interval = setInterval(moveRight, 100);   
};
