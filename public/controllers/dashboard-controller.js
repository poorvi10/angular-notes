notes.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $http) {
	console.log(sessionStorage.user_email);
	$http.post('/getNote', {"email": sessionStorage.user_email})
		.success(function(data) {
			$scope.records = data;
		})
		.error(function(data) {
			$window.location.href = '/dashboard';
		});

    // Check for unauthorized access.
    if (sessionStorage.user_email) {
    	$http.post('/getUser', {"email": sessionStorage.user_email})
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
    	sessionStorage.clear();
    	$window.location.href = '/login';
    }

    $scope.createNote = function() {
    	$http.post('/setNote', {"email": sessionStorage.user_email,"noteTitle": $scope.noteHeading,"noteBody": $scope.note})
			.success(function(data) {
				var html = '<div class="col-md-3 currentNote">'+$scope.note+'</div>';
				angular.element('#notes').append(html);
				$scope.name = data.firstname + data.lastname;
			})
			.error(function(data) {
				$window.location.href = '/dashboard';
			});
    }
});
