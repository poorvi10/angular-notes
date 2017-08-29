// Export the controller
var login = angular.module('login', []);

// Defining wrapper Routes for our API
login.controller('loginCtrl', function loginCtrl($scope, $http) {
	$scope.formData = {};
    $scope.createUser = function() {
		$http.post('/users', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.users = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};

})