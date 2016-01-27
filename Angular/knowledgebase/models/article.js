var mongoose=require('mongoose');

var articleSchema=mongoose.Schema({
	title:{
		type:String,
		index:true,
		required:true
	},
	body:{
		type:String,
		required:true
	},
	category:{
		type:String,
		index:true,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	}
});

var Article=module.exports=mongoose.model('Article', articleSchema);

//Trae todos los items -->GET
module.exports.getArticles = function(callback){
	Article.find(callback);
}
//Trae los item por Id -->GET 
module.exports.getArticleById=function(id, callback){
	Article.findById(id, callback);
}
//Trae Item por categoria -->GET
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	Article.find(query, callback);
}


//Crear un Article --> POST
module.exports.createArticle=function(newArticle, callback){
	//Metodo save para guadar en bd
	newArticle.save(callback);
}

//Update Actualizar --> POST
module.exports.updateArticle=function(id, data, callback){
	var title    = data.title;
	var body     = data.body;
	var category = data.category;

	//Tomo el id del objeto Article
	var query = {_id:id};
	//Busco en la bd el objeto mediante la funcion findbyid
	Article.findById(id, function(err, article){
		if(!article){
			//Validamos que exista el objeto
			return next(new Error('No se pudo cargar'));
		}else {
			//Aqui se actualiza
			article.title=title;
			article.body=body;
			article.category=category;
			//Aqui se guarda con los nuevos datos
			article.save(callback);
		}
	});
}

//Eliminar un objeto de la BD
module.exports.removeArticle=function(id, callback){
	//Busca el objeto por el id y luego lo elimina con remove
	Article.find({_id:id}).remove(callback);
}