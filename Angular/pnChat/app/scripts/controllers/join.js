'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
angular.module('pnChatApp')
  .controller('JoinCtrl',['$scope', '$rootScope', '$location', 'PubNub', function($scope, $rootScope, $location, PubNub) {
    $scope.data = {
    	username: 'User_' +Math.floor(Math.random() * 1000)
    };	

    $scope.join = function(){
    	console.log('Joining...');
    	var _ref, _ref1;
    	$rootScope.data || ($rootScope.data = {});
    	$rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
        $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
        $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;

    	console.log($rootScope);

    	PubNub.init({
    		subscribe_key: 'sub-c-095fd4ea-8953-11e5-9320-02ee2ddab7fe',
    		publish_key: 'pub-c-15ba8b2e-4a97-45ad-9d12-f9852d976abd',
    		uuid: $rootScope.data.uuid
    	});
    	return $location.path('/main');
    }
  }]);
