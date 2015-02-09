var app = angular.module('personalApi');

app.controller('meCtrl', function ($scope, apiService) {
	apiService.getInfo('name').then(function (responce) {
		$scope.names = responce;
	})
	apiService.getInfo('residence').then(function (responce) {
		$scope.residence = responce;
	})
	apiService.getInfo('hobbies').then(function (responce) {
		$scope.hobbies = responce;
	})
})