angular
	.module('app', [
		'ngTouch',
		'ngAnimate',
		'ui.router',
		'ui.bootstrap'
	])

	.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		$stateProvider.state('app', {
			abstract: true,
			views: {
				'': {
					templateUrl: 'app.html',
					controller: 'AppController as vm'
				},
				'footer@app': {
					templateUrl: 'footer/footer.html',
					controller: 'FooterController as vm'
				},
				'aside@app': {
					templateUrl: 'navigation/navigation.html',
					controller: 'NavigationController as vm'
				}
			}
		});

		[
			{ state: 'not-found', template: 'errors/404.html', statusCode: 404 }
		].forEach(function (error) {
			$stateProvider.state(error.state, {
				parent: 'app',
				views: {
					'': {
						controller: function (err) {
							var vm = this;

							vm.error = err;
						},
						controllerAs: 'vm',
						templateUrl: error.template
					}
          // ,
					// 'aside@app': {
					// 	templateUrl: 'navigation/navigation.html',
					// 	controller: 'NavigationController as vm'
					// }
				},
				data: {
					pageTitle: "{{ 'errors.' + err.state | translate }}",
					prerenderStatusCode: error.statusCode.toString()
				},
				resolve: {
					err: function () {
						return error;
					}
				}
			});
		});

		$urlRouterProvider.otherwise(function ($injector, $location) {
			var state = $injector.get('$state');
			state.go('not-found');
			return $location.path();
		});
	})
