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

var nameInput = document.getElementById('name');
var submit = document.getElementById('namebtn');
submit.onclick = function() {
    var name = nameInput.value;
    var names = ['name1','name2','name4','name4'];
    var list ='';
    for(var i=0; i< names.length; i++){
        list += '<li>' + names[i] + '<li>';
    }
    var url = document.getElementById('namelist');
    url.innerHTML = list;
};



var commentsTextarea = document.getElementById('comments');
var submit = document.getElementById('submitbtn');
submit.onclick = function() {
    var comments = commentsTextarea.value;
    
    var url = document.getElementById('comment');
    url.innerHTML = comments;
};