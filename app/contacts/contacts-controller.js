angular.module('app')

	.controller('ContactsController', function ($scope, AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
