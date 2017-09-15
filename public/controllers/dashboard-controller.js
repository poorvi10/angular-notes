login.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $localStorage, $sessionStorage) {
    
    if ($sessionStorage.SessionMessage) {
    	$scope.name = $sessionStorage.SessionMessage;
    } else {
    	alert('404');
    }
    
    $scope.logout = function() {
    	$sessionStorage.reset();
    	$window.location.href = '/login';
    }
});