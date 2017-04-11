angular.module('app')

	.controller('NavigationController', function (AppService) {
		var vm = this;

		vm.isNavOpen = AppService.isNavOpen();

		vm.toggleNav = function () {
			vm.isNavOpen = AppService.toggleNav();
		}
	});
