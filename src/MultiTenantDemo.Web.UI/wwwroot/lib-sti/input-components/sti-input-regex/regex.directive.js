(function () {
    'use strict';

    angular
      .module('sti.components')
      .directive('regexVal', regexVal);
    
    function regexVal() {
        var directive = {
            link: link,
            require: 'ngModel',
            scope: {
                rule: '@'
            }
        };
        return directive;

        function link(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var regex = new RegExp(scope.rule);
                var transformedInput = text.toUpperCase().replace(regex, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    }

})();