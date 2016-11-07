var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false}));






app.get('/login',(req,res)=>{
  res.sendFile('/Users/donhyunkim/Desktop/Study/Node.js/express_ex1/index.html');
});



app.post('/loginSuccess',(req, res)=>{
  var loginEmail = req.body.loginEmail;
  var loginPwd = req.body.loginPwd;
  res.send(loginEmail+ ' Login Success!!!');

});




app.listen(4000,()=>{

    console.log('4001port connected');
});
