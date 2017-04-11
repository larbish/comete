angular.module('app')

	.config(function ($stateProvider) {
		$stateProvider.state('project', {
			url: '/project',
			parent: 'app',
			templateUrl: 'project/project.html',
			controller: 'ProjectController as vm'
		});
	});
