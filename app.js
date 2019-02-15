const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      methodOverride = require('method-override'),
      mongoose = require('mongoose');
      require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/drinks', {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

const drinksSchema = new mongoose.Schema({
  strDrink: String,
  strCategory: String,
  strDrinkThumb: String,
  strGlass: String,
  strIngredient1: String,
  strIngredient2: String,
  strIngredient3: String,
  strIngredient4: String,
  strIngredient5: String,
  strIngredient6: String,
  strIngredient7: String,
  strIngredient8: String,
  strIngredient9: String,
  strInstructions: String,
  strMeasure1: String,
  strMeasure2: String,
  strMeasure3: String,
  strMeasure4: String,
  strMeasure5: String,
  strMeasure6: String,
  strMeasure7: String,
  strMeasure8: String
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('*', function(req, res){
  res.send('Page not found!');
});

app.listen(3000, function(){
  console.log('server started');
});