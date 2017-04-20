angular.module('app')

	.controller('ProjectController', function ($scope, AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}
	});
