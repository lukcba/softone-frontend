
(function () {
  'use strict';

  angular.module('SoftOne.theme')
      .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();
