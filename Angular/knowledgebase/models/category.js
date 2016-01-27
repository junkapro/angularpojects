var mongoose=require('mongoose');

var categorySchema=mongoose.Schema({
	name:{
		type:String,
		index:true,
		required:true
	},
	description:{
		type:String
	}
});

var Category=module.exports=mongoose.model('Category', categorySchema);

//Trae todos los items -->GET
module.exports.getCategories = function(callback){
	Category.find(callback);
}
//Trae los item por Id -->GET 
module.exports.getCategoryById=function(id, callback){
	Category.findById(id, callback);
}
//Trae Item por categoria -->GET
module.exports.getCategoriesByCategory = function(category, callback){
	var query = {category: category};
	Category.find(query, callback);
}
//Crear una Categoria 
module.exports.createCategory = function(newCategory, callback){
	newCategory.save(id, callback);
}




