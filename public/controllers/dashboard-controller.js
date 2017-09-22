notes.controller('dashboardCtrl', function dashboardCtrl($scope, $window, $http) {
    
    $scope.editNote = false;
    $scope.createNote = true;
	$http.post('/getNote', {"email": sessionStorage.user_email})
		.success(function(data) {
			$scope.notes = data;
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
				var html = '';
				html += '<div class="col-md-3 currentNote" id= "'+data._id+'" ng-repeat="note in notes">';
	        	html += '<div class="row">';
	        	html += '<a class="col-md-2" id="editNotedeleteNote" ng-click="getNoteById('+data._id+')">Edit</a>';
	        	html += '<a class="col-md-2" id="deleteNote" ng-click="deleteNote('+data._id+')">Delete</a>';
	        	html += '</div>';
	        	html += '<h1>'+$scope.noteHeading+'</h1>';
	        	html += '<div class="col-md-12" id="noteBody">'+$scope.note+'</div>';
				angular.element('#notes').append(html);
				$scope.name = data.firstname + data.lastname;
				$('#myModal').modal('hide');
			})
			.error(function(data) {
				$window.location.href = '/dashboard';
			});
    }

    $scope.deleteNote = function(noteId) {
    	$http.post('/deleteNote', {"id": noteId})
			.success(function(data) {
				if (data == "Success") {
					angular.element('#'+noteId).remove();
				}
			})
			.error(function(data) {
				$window.location.href = '/dashboard';
			});
    }

    $scope.getNoteById = function(noteId) {
    	$scope.editNote = true;
    	$scope.createNote = false;
    	$http.post('/getNoteById', {"noteId": noteId})
		.success(function(data) {
			$scope.noteId = data[0]._id;
			$scope.noteHeading = data[0].noteTitle;
			$scope.note = data[0].noteBody;
			$('#myModal').modal();
		})
		.error(function(data) {
			alert("Cannot be edited");
		});
    }

    $scope.updateNote = function() {
    	$http.post('/updateNote', {"noteId": $scope.noteId, "noteTitle": $scope.noteHeading,"noteBody": $scope.note})
		.success(function(data) {
			$('#myModal').modal('hide');
    		angular.element('#'+$scope.noteId).children('h1').html($scope.noteHeading);
    		angular.element('#'+$scope.noteId).children('#noteBody').html($scope.note);
			$scope.editNote = true;
    		$scope.createNote = false;
		})
		.error(function(data) {
			alert("Cannot be updated");
			$scope.editNote = true;
    		$scope.createNote = false;
		});
    }
});