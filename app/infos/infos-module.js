angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('infos', {
			url: '/infos',
			parent: 'app',
			templateUrl: 'infos/infos.html',
			controller: 'InfosController as vm'
		});
	});
