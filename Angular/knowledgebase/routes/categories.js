var express = require('express');
var router = express.Router();

var Category = require('../models/category');

//Rutas para los items

//Ruta para traer todos los items
router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories){
  	if(err){
  		console.log(err);
  	}
  	res.json(categories);
  });
});

//Ruta para traer item por Id:
router.get('/:id', function(req, res, next) {
  Category.getCategoryById(req.params.id, function(err, category){
  	if(err){
  		console.log(err);
  	}
  	res.json(category);
  });
});

//Ruta para traer items por Categoria
router.get('/category/:category', function(req, res, next) {
  Category.getCategoryByCategory(req.params.category, function(err, categories){
  	if(err){
  		console.log(err);
  	}
  	res.json(articles);
  });
});

module.exports = router;
