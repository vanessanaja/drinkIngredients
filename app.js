const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      methodOverride = require('method-override'),
      mongoose = require('mongoose');
      require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('*', function(req, res){
  res.send('Page not found!');
});

app.listen(3000, function(){
  console.log('server started');
});