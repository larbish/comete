angular.module('app')
  .factory('App', function() {
    return {
      isNavOpen: isNavOpen,
			toggleNav: toggleNav
		};

    var isNavOpen = true;

    function isNavOpen () {
      return isNavOpen;
    }

    function toggleNav () {
      isNavOpen = !isNavOpen;
    }
});
