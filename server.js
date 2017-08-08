var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var newpage1={
    title: 'PAGE 1',
    heading: 'page 1',
    date: '1-5-2017',
    content:`  <p>
    This is my First page. look thirsty I know 
    </p>
    <p>This is my First page. look thirsty I know</p>   ` 
    
};
function createtemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate=`
<!DOCTYPE html>
<html>
    
<head>
   
<title>
    ${title}
    </title>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet"/>
</head>
<body>
<div class="container">
    <div>
    ${date}
    </div>
    <a href="/"> HOME</a>
    <h1> ${heading}</h1>
        ${content}
            
    
    </div>
    


</body>
</html>`;
return htmltemplate;
}
app.get('/newpage1', function (req, res) {
  res.send(createtemplate(newpage1));
});


app.get('/newpage2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'newpage2.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
