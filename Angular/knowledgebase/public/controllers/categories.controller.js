angular.module('kB')



//Funcion GET
//Trae todo el Objeto JSON de categories
.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
	//GET especifica la ruta, success la funcion callback y el $scope trae el
	// el objeto como categories
	$http.get('/categories').success(function(data){
		$scope.categories=data;
	});
} ])