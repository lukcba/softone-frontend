
(function () {
  'use strict';

  angular.module('SoftOne.pages', [
    'ui.router',
    'SoftOne.resources',
    'SoftOne.pages.dashboard',
      'SoftOne.pages.operator'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
