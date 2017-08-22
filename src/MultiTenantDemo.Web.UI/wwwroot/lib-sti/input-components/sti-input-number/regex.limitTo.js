(function () {
    'use strict';

    angular
      .module('sti.components')
      .directive('limitTo', limitTo);

    function limitTo() {
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attr, ngModelCtrl) {
            var limit = parseInt(attr.limitTo);
            angular.element(element).on("keypress", function (e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }

})();