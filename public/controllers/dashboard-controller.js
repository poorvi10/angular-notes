notes.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $localStorage, $sessionStorage, $http) {
    if ($sessionStorage.user_email) {
    	
    	$http.post('/getUser', {"email": $sessionStorage.user_email})
			.success(function(data) {
				$scope.name = data;
			})
			.error(function(data) {
				$window.location.href = '/login?err=500';
			});
    } else {
    	$window.location.href = '/login?err=401';
    }

    $scope.logout = function() {
    	$sessionStorage.$reset();
    	$window.location.href = '/login';
    }

    $scope.createNote = function() {

    	$http.post('/getUser', {"email": $sessionStorage.user_email})
			.success(function(data) {
		    	$http.post('/setUser', {"userId": data._id,"noteTitle": $scope.noteHeading,"noteBody": $scope.note})
					.success(function(data) {
						var html = '<div class="col-md-3 currentNote">'+$scope.note+'</div>';
	    				angular.element('#notes').append(html);
						$scope.name = data.firstname + data.lastname;
					})
					.error(function(data) {
						$window.location.href = '/dashboard';
					});
				})
			.error(function(data) {
				$window.location.href = '/dashboard';
			});

    	var html = '<div class="col-md-3 currentNote">'+$scope.note+'</div>';
    	angular.element('#notes').append(html);
    }
});
