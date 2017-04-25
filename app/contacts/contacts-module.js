angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('contacts', {
			url: '/contacts',
			parent: 'app',
			templateUrl: 'contacts/contacts.html',
			controller: 'ContactsController as vm'
		});
	});
