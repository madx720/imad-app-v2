var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    title:'Article One | Madx',
    heading :'Article One',
    date: 'March 2, 2017',
    content:` <p>
                
                This is the my first article please do format it properly
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
                This is the my first article please do format it properly 
            </p>  
    
    
    
    `
    
};
function createTemplate(data){
    var title= data.title;
    var date = data.date;
    var heading =data.heading;
    var content=data.content;
var htmlTemplate =`<html>
  <head>
      <title>
          ${title}
          </title>
      </head>  
      
<body>
    <div>
        <a href="/">Home</a>
         </div>
        <hr/>
        <h3>${date}</h3>
        <div>
            ${content}      
            </div>
    
    </body>      
   
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});
app.get('/article-one',function(req,res){
res.send(createTemplate(articleOne));
   
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
