//counter
var button = document.getElementById('counter');

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = request.responseText;
             var span = document.getElementById('count');
    span.innerHTML = counter.toString();    
            }
        }
    };
    
 request.open('GET', 'http://anandrajd48.imad.hasura-app.io/counter', true);
 request.send(null);
};


var submit = document.getElementById('namebtn');
submit.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var names = request.responseText;
               names = JSON.parse(names);
    var list ='';
    for(var i=0; i< names.length; i++){
        list += '<li>' + names[i] + '<li>';
    }
    var url = document.getElementById('namelist');
    url.innerHTML = list;
                 
            }
        }
    };
    var nameInput = document.getElementById('name');
var name = nameInput.value;
 request.open('GET', 'http://anandrajd48.imad.hasura-app.io/submit-name?name=' + name , true);
 request.send(null);
    
};



var commentsTextarea = document.getElementById('comments');
var comments = commentsTextarea.value;
var submit = document.getElementById('submitbtn');
submit.onclick = function() {
    
    
    var url = document.getElementById('comment');
    url.innerHTML = comments;
};