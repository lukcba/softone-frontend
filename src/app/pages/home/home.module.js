(function () {
  'use strict';

  angular.module('SoftOne.pages.home', [])
      .config(routeConfig);

  function routeConfig($stateProvider) {
        $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/pages/home/index.html',
          title: 'SoftOne'
        });
  }

})();