(function () {
  'use strict';

  angular.module('SoftOne.pages.config', [])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('config', {
          title: 'Configuración',
          sidebarMeta: {
            icon: 'fa fa-cogs',
            order: 1,
          },
        });
  }

})();