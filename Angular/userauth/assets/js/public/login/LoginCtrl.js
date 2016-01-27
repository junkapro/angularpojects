
//Controlador
//Login
//Se usa toastr para enviar mensajes entre capas https://github.com/Foxandxss/angular-toastr
angular.module('LoginMod').controller('LoginCtrl',['$scope', '$http', 'toastr', function($scope, $http, toastr){
	console.log('Logueandome al sistema, inicializando', 'fase 1: Controlador Conectado al modelo');
 
	$scope.runLogin = function(){
		console.log('Envio de datos por el formulario Login exitoso');
		$http.put('/login',{
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(){
			console.log('Logramos entrar');
			window.location = '/dashboard';
		}).catch(function onError(err){
			if(err.status == 400 || 404){
				toastr.error('Invalid Credentials', 'Error', {
					closeButton: true
				});
				return;
			}
			toastr.error('An error has occured, please try again later', 'Error', {
				closeButton: true
			});
			return;
		})
	}

}])

