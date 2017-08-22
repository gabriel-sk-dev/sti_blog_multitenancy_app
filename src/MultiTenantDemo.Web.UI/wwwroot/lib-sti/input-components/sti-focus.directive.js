(function () {
    'use strict';

    angular
      .module('sti.components')
      .directive('focus', focus);

    function focus() {
        var directive = {
            link: link
        };

        return directive;

        function link(scope, element, attr) {
            if (attr.focus) {
                setTimeout(function () {
                    element.focus();
                });
            }
        }
    }

})();