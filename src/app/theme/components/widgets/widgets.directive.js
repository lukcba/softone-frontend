
(function () {
  'use strict';

  angular.module('SoftOne.theme.components')
      .directive('widgets', widgets);

  /** @ngInject */
  function widgets() {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/theme/components/widgets/widgets.html',
      replace: true
    };
  }

})();