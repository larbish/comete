angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('programmation', {
			url: '/programmation',
			parent: 'app',
			templateUrl: 'programmation/programmation.html',
			controller: 'ProgrammationController as vm'
		});
	});
