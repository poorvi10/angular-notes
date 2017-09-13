// Export the controller
var login = angular.module('login', ['ngRoute']);
login.config(function($routeProvider){
    $routeProvider
    .when('/dashboard',{
        templateUrl: 'views/dashboard.html',
        controller: 'controllers/dashboardController'
    });
})

// Defining wrapper Routes for our API
login.controller('loginCtrl', function loginCtrl($scope, $http, $timeout, $location, $window) {
	$scope.formData = {};
	
    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/login', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				if (data.status == 200) {
					$window.location.href = '/dashboard';
				} else if(data.status == 500) {
					$scope.message = data.msg;
				}
				
			})
			.error(function(data) {
				$scope.formData = {};
				$scope.message = data;
			});
        $timeout(function() { $scope.isCheck = true; }, 10);
	};
	$scope.init = function() {
		$scope.formData = {};
		$scope.formData.email = '';
	}
})