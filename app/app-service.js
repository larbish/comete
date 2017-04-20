angular.module('app')

  .factory('AppService', function($rootScope) {
    $rootScope.isNavOpen = false;

    return {
      toggleNav: function () {
        $rootScope.isNavOpen = !$rootScope.isNavOpen;
        if ($rootScope.isNavOpen) $rootScope.noscroll = 'noscroll';
        else $rootScope.noscroll = '';
      }
    };
});
