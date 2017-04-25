angular.module('app')

	.controller('HomeController', function ($scope, AppService) {
		var vm = this;

		vm.toggleNav = function () {
			AppService.toggleNav();
		}

		vm.bg = '../img/project/bg.jpg';
		//
		// $scope.$watch(function () {
    //    return AppService.isNavOpen();
    //  },
    //   function(newVal, oldVal) {
    //     vm.isNavOpen = newVal;
    // }, true);
	});
