var register = angular.module('register', []);

// Defining wrapper Routes for our API
register.controller('signupCtrl', function signupCtrl($scope, $http, $timeout) {
	$scope.formData = {};
    $scope.signUp = function() {
    	$scope.isCheck = false;
		$http.post('/register', $scope.formData)
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
