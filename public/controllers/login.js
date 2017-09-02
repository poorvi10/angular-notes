// Export the controller
var login = angular.module('login', []);

// Defining wrapper Routes for our API
login.controller('loginCtrl', function loginCtrl($scope, $http, $timeout) {
	$scope.formData = {};
    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/users', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.message = data;
			})
			.error(function(data) {
				$scope.message = data;
			});
        $timeout(function() { $scope.isCheck = true; }, 10);
	};
})

// Defining wrapper Routes for our API
login.controller('signupCtrl', function signupCtrl($scope, $http, $timeout) {
	$scope.formData = {};
    $scope.signUp = function() {
    	$scope.isCheck = false;
		$http.post('/signup', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.message = data;
			})
			.error(function(data) {
				$scope.message = data;
			});
        $timeout(function() { $scope.isCheck = true; }, 10);
	};
})
