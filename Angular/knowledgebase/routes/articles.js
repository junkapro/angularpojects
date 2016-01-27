var express = require('express');
var router = express.Router();

var Article = require('../models/article');

//Rutas GET para los items

//Ruta para traer todos los items
router.get('/', function(req, res, next) {
  //Metodo para traer 
  Article.getArticles(function(err, articles){
  	if(err){
  		console.log(err);
  	}
    //Devuelve el objeto en formato JSON
  	res.json(articles);
  });
});

//Ruta para traer item por Id:
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
  	if(err){
  		console.log(err);
  	}
    //Devuelve el objeto en formato JSON
  	res.json(article);
  });
});

//Ruta para traer items por Categoria
router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err, articles){
  	if(err){
  		console.log(err);
  	}
  	res.json(articles);
  });
});

//Ruta POST para crear

//Crear un nuevo objeto
router.post('/', function(req, res, next){
  //Traer la info del formulario para crear 
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;
  //Crear el objeto Article con los valores del form
  var newArticle= new Article({
    title : title,
    category : category,
    body : body
  });
  //Llamando al metodo crear, para guardar el objeto nuevo
  Article.createArticle(newArticle, function(err, article){
    //Validamos e imprimimos si hay error
    if (err){
      console.log(err)
    }
    //Al guardar redireccionamos al index del objeto
    res.location('/articles');
    res.redirect('/articles');
  });

});

//Ruta PUT para actualizar

//Actualizar objeto
router.put('/', function(req, res, next){
  //Id que viene del formulario 
  var id = req.body.id;
  //Creando objeto data con la info del form
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };
  //Llamando al metodo de actualizar Article 
  Article.updateArticle(id, data, function(err, article){
    //Validamos e imprime el error si lo hay
    if (err){
      console.log(err)
    }
    //Al actualizar redireccionamos al index del objeto
    res.location('/articles');
    res.redirect('/articles');
  });
});

//Ruta DELETE para borrar
//Borrar ojeto
router.delete('/:id', function(req, res, next){
    //Tomo el id del navegador con req.params.
    var id = req.params.id;
    //Metodo delete para eliminar el objeto
    Article.removeArticle(id, function(err, article){
      //Validamos e imprime el error si lo hay
      if (err){
        console.log(err)
      }
      //Al eliminar redireccionamos al index del objeto
      res.location('/articles');
      res.redirect('/articles');
      });
});


module.exports = router;
