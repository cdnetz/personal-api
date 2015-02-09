var app = angular.module('personalApi');

app.controller('skillsCtrl', function ($scope, apiService) {
	apiService.getInfo('occupations').then(function (responce) {
		$scope.occupations = responce;
	})
	apiService.getInfo('mentions').then(function (responce) {
		$scope.mentions = responce;
	})
	apiService.getInfo('references').then(function (responce) {
		$scope.references = responce;
	})
	apiService.getInfo('skills').then(function (responce) {
		$scope.skills = responce;
	})
})