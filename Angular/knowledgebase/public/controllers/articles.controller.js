angular.module('kB')

//Funcion GET
//Trae todo el Objeto JSON de articles
.controller('ArticlesCtrl', ['$scope','$http', function($scope, $http){
		//GET especifica la ruta, success la funcion callback y el $scope trae el
		// el objeto como articles
		$http.get('/articles').success(function(data){
		$scope.articles = data;
	});
}])


//Funcion GET
//routeParams se usa para traer datos de la URL
.controller('ArticlesCategoryCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams){
	//GET mediante el routeParams se busca la ruta 
	$http.get('/articles/category/'+$routeParams.category).success(function(data){
		$scope.cat_articles = data;
		$scope.category = $routeParams.category;
	});
}])

//Funcion GET
//Trae todo el Objeto JSON de articles details
.controller('ArticleDetailsCtrl', ['$scope','$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	//GET mediante el routeParams concatena el ID 
	$http.get('/articles/'+$routeParams.id).success(function(data){
		$scope.article = data;
	});
	//Metodo para eliminar, dentro del controlador ArticleDetails
	$scope.removeArticle=function(){
		//Metodo DELETE 
		$http.delete('/articles/'+$routeParams.id).success(function(data){
			console.log(data);
		});
		$location.path('/articles');
	}
}])

//Funcion GET: trae las categorias para el loop del select
.controller('ArticleCreateCtrl', ['$scope','$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
		$http.get('/categories').success(function(data){
		$scope.categories=data;
	});

	//Ruta para crear un articulo
	$scope.addArticle = function(){
		var data = {
			title: $scope.title,
			body: $scope.body,
			category:$scope.category
		}
		//POST request para enviar el objeto
		$http.post('/articles', data).success(function(data, status){
			console.log(status);
		});
		//redireccionamiento
		$location.path('/articles');
	}
}])

//Funcion PUT: actualizar el objeto
.controller('ArticleEditCtrl', ['$scope','$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
		$http.get('/categories').success(function(data){
		$scope.categories=data;
	});

		$http.get('/articles/'+$routeParams.id).success(function(data){
		$scope.article=data;
	});

	//Ruta para crear un articulo
	$scope.updateArticle = function(){
		var data = {
			id:      $routeParams.id,
			title:   $scope.article.title,
			body:    $scope.article.body,
			category:$scope.article.category
		}
		//PUT request para enviar el objeto
		$http.put('/articles', data).success(function(data, status){
			console.log(status);
		});
		//redireccionamiento
		$location.path('/articles');
	}
}])

