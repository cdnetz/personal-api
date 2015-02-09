var app = angular.module('personalApi');

app.service('apiService', function ($http) {
	this.getInfo = function (str) {
		return $http.get('http://localhost:8989/'+str).then(function (responce) {
			var results = responce.data
			return results;
		})
	}
})