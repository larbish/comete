angular.module('app')

  .factory('AppService', function() {

     var data = {
      navOpen: false
    };

    return {
      isNavOpen: function () {
        return data.navOpen;
      },
      toggleNav: function () {
        data.navOpen = !data.navOpen;
        return data.navOpen;
      }
    };
});
