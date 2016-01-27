//Controlador
//Sign Up
angular.module('SignupMod').controller('SignupCtrl',['$scope', '$http', function($scope, $http){
	console.log('Creando cuenta al sistema, inicializando', 'fase 1: Controlador Conectado al modelo');
//Esta funcion recibe el formulario, toma los valores y lo envie
//al api
	$scope.runSignup = function(){
		console.log('Logueandose Mr: '+$scope.name+' fase 2: Informacion del formulario recibida por el controlador');

		//Aqui se envia al servidor Sail
		//Peticion POST en angular se usa $http
		//Primer parametro es la ruta hacianda donde voy a enviar el form
		//Segundo parametro es objeto que se recibe del form
		$http.post('/signup', {
			name: $scope.name,
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess(response){
			window.location = '/user'
		})
		.catch(function onError(err){
			console.log('Error: ',err);
		})
	}
}])

