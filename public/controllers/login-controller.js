// Export the controller
var login = angular.module('login', ['ngStorage']);

// Defining wrapper Routes for our API
login.controller('loginCtrl', function loginCtrl($scope, $http, $timeout, $location, $window, $localStorage, $sessionStorage) {
	$scope.formData = {};
	
    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/login', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				if (data.status == 200) {
					var name = data.firstname + " " + data.lastname;
					$sessionStorage.SessionMessage = name;
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
login.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $localStorage, $sessionStorage) {
    alert($sessionStorage.SessionMessage);
    $scope.name = $sessionStorage.SessionMessage;
    $scope.logout = function () {
    	$sessionStorage.$reset();
    	$window.location.href = '/login';
    }
});