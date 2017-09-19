// Export the controller
var notes = angular.module('notes');

//To obtain URL parameters
var parseQueryString = function(url) {
  var urlParams = {};
  url.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) {
      urlParams[$1] = $3;
    }
  );

  return urlParams;
}

// Defining wrapper Routes for our API
notes.controller('loginCtrl', function loginCtrl($scope, $http, $timeout, $location, $window) {
	var params = parseQueryString(location.search);
	if(params.err){
		$scope.isCheck=true;
		if(params.err == 500)
			$scope.message="Internal Server Error";
		if(params.err == 401)
			$scope.message="Please login to continue"
	}

	$scope.formData = {};

    $scope.createUser = function() {
    	$scope.isCheck = false;
		$http.post('/login', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				if (data.status == 200) {
					var email = data.email;
          sessionStorage.setItem("user_email", email);
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
