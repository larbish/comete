angular.module('app')

	.controller('InfosController', function ($scope, AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
