
(function () {
  'use strict';

  angular.module('SoftOne.pages', [
    'ui.router',
    'SoftOne.resources',
    'SoftOne.pages.home',
    'SoftOne.pages.config',
    'SoftOne.pages.config.operator'
  ])
      .config(routeConfig);

  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
