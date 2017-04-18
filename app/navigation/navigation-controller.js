angular.module('app')

	.controller('NavigationController', function (AppService, $rootScope) {
		var vm = this;

		vm.isNavOpen = AppService.isNavOpen();

		vm.toggleNav = function () {
			vm.isNavOpen = AppService.toggleNav();
			if (vm.isNavOpen) $rootScope.noscroll = 'noscroll';
			else $rootScope.noscroll = '';
		}
	});
