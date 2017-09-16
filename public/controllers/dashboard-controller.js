login.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $localStorage, $sessionStorage, $http) {

    if ($sessionStorage.SessionMessage) {
    	$scope.name = $sessionStorage.SessionMessage;
    	$http.post('/users', $sessionStorage.SessionMessage)
			.success(function(data) {
				console.log(data);
			})
			.error(function(data) {

			});
    } else {
    	//$window.location.href = '/login';
    }
    
    $scope.logout = function() {
    	$sessionStorage.$reset();
    	$window.location.href = '/login';
    }

    $scope.create = function() {
    	var html = '<div class="col-md-3 currentNote">'+$scope.note+'</div>';
    	angular.element('#notes').append(html);
    }
});