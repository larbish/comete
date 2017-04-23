angular.module('app')

	.controller('ArtistController', function ($scope, artist) {
		var vm = this;
		vm.artist = artist;

		vm.close = function () {
			$scope.$dismiss();
		};

	});
