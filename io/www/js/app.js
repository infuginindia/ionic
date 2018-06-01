// Ionic Starter App

angular.module('io', ['ionic']).controller('ioCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Home' },
    { title: 'Healthy Diets' },
    { title: 'Low Fat Diet' },
    { title: 'Fast Foods' }
  ];
})