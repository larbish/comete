angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('tickets', {
			url: '/tickets',
			parent: 'app',
			templateUrl: 'tickets/tickets.html',
			controller: 'TicketsController as vm'
		});
	});
