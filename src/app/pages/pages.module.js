
(function () {
  'use strict';

  angular.module('SoftOne.pages', [
    'ui.router',

    'SoftOne.pages.dashboard',
    
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
