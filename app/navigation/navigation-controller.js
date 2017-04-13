angular.module('app')

	.controller('NavigationController', function (AppService) {
		var vm = this;

		vm.isNavOpen = AppService.isNavOpen();

		console.log(vm.isNavOpen);

		vm.toggleNav = function () {
			vm.isNavOpen = AppService.toggleNav();
		}
	});
