angular.module('app')

	.controller('NavigationController', function (AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
