angular.module('app')

	.controller('TicketsController', function ($scope, AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
