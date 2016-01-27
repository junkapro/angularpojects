//Controlador FRONT END
//Dashboard
angular.module('DashMod').controller('DashCtrl',['$scope', '$http', function($scope, $http){
	$scope.getUser = function(){
		console.log('Getting User...');

		//Metodo GET para recuperar el  usuario
		$http.get('/getuser')
		.then(function onSuccess(user){
			//Aqui bindea la informacion en el scope
			$scope.user = user.data;
		})
		.catch(function onError(err){
			console.log(err);
		})
	}
}])