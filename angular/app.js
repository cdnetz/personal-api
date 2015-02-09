var app = angular.module('personalApi', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'angular/js/home/home.html',
		controller: 'homeCtrl'
	})
	.when('/me', {
		templateUrl: 'angular/js/me/me.html',
		controller: 'meCtrl'
	})
	.when('/skills', {
		templateUrl: 'angular/js/skills/skills.html',
		controller: 'skillsCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
});