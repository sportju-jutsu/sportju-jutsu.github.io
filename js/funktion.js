var config = {
    apiKey: "AIzaSyCCm3BrajTPDQtTyKuxJKQmw4ZyHnlBV0s",
    authDomain: "kommentarer-420f6.firebaseapp.com",
    databaseURL: "https://kommentarer-420f6.firebaseio.com",
    projectId: "kommentarer-420f6",
    storageBucket: "",
    messagingSenderId: "1051101456427"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  });

app.controller("KommentarCtrl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;

	$scope.kommentar = {
		text: "",
		scribent: ""
	}

	$scope.addComment = function() {
		$scope.kommentarer.$add($scope.kommentar);
	
		$scope.kommentar = {
		text: "",
		scribent: ""
	}

	}

});

