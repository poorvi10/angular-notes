// Export the controller
var login = angular.module('login', ['ngCookies']);
login.config(function($routeProvider){
    $routeProvider
    .when('/dashboard',{
        templateUrl: 'views/dashboard.html',
        controller: 'controllers/dashboardController'
    });
})

// Defining wrapper Routes for our API
login.controller('loginCtrl', function loginCtrl($scope, $http, $timeout, $location, $window, userPersistenceService) {
	$scope.formData = {};
	
    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/login', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				if (data.status == 200) {
					var name = data.firstname + " " + data.lastname;
					userPersistenceService.setCookieData(name);
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

login.factory("userPersistenceService", ["$cookies", function($cookies) {
		var userName = "";

		return {
			setCookieData: function(username) {
				userName = username;
				$cookies.put("userName", username);
			},
			getCookieData: function() {
				userName = $cookies.get("userName");
				return userName;
			},
			clearCookieData: function() {
				userName = "";
				$cookies.remove("userName");
			}
		}
	}
]);

login.controller('dashboardCtrl', function dashboardCtrl($scope) {
    $scope.name = userPersistenceService.getCookieData();
});