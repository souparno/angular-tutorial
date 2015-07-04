var app = angular.module('app', []);

app.controller('appController', function($scope) {
  $scope.message = 'hello';

  $scope.updateMessage = function (message) {
   $scope.message = message;
  };
});
