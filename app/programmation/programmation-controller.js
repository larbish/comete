angular.module('app')

	.controller('ProgrammationController', function (AppService, $rootScope, $scope) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
