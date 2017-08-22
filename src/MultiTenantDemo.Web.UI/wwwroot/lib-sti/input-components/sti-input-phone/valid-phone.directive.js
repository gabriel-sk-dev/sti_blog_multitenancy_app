(function () {
    'use strict';

    angular
        .module('sti.components')
        .directive("validPhone", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.validafone = function (modelValue) {
                        var isValid = validaFone(modelValue || '');
                        ngModel.$setValidity('validatePhone', isValid);
                        return isValid;
                    }
                }
            };
        });

    function validaFone(txt) {
        //SEM CodPais e sem CodArea!
        var _regexFone = /^[0-9-]*$/;
        return !txt.length || (txt.length >= 8 && txt.length <= 10 && _regexFone.test(txt));
    }

})();