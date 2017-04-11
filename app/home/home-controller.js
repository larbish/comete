angular.module('app')

	.controller('HomeController', function ($scope, AppService) {
		var vm = this;

		vm.isNavOpen = AppService.isNavOpen();

		$scope.$watch(function () {
       return AppService.isNavOpen();
     },
      function(newVal, oldVal) {
        vm.isNavOpen = newVal;
    }, true);
	});
