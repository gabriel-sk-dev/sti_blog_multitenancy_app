(function () {
    'use strict';

    angular
        .module('sti.components')
        .directive("validFullName", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.validateFullName = function (modelValue) {
                        var isValid = validateFullName(modelValue || '');

                        ngModel.$setValidity('validateFullName', isValid);
                        return isValid;
                    }
                }
            };
        });

    function validateFullName(txt) {
        return (txt.trim().split(' ').length > 1);
    }

})();