// Export the controller
var notes = angular.module('notes', ['ngStorage']);

// Defining wrapper Routes for our API
notes.controller('loginCtrl', function loginCtrl($scope, $http, $timeout, $location, $window, $localStorage, $sessionStorage) {
	$scope.formData = {};

    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/login', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				if (data.status == 200) {
					var email = data.email;
					$sessionStorage.SessionMessage = email;
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
});
