console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'This is another waytext change instead of origin';
var h1 = document.getElementById('heading');
h1.onclick = function(){
 h1.style.marginleft = '200px';    
};
