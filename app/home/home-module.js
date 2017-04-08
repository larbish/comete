angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('home', {
			url: '/',
			parent: 'app',
			templateUrl: 'home/home.html',
			controller: 'HomeController as vm'
		});
	});
