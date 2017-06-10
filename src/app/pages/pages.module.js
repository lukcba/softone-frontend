
(function () {
  'use strict';

  angular.module('SoftOne.pages', [
    'ui.router',
    'softOne.resources',

    'SoftOne.pages.dashboard',
    
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
