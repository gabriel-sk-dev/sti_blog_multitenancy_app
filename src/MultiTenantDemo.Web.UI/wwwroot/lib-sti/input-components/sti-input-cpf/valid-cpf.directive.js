(function () {
    'use strict';

    angular
        .module('sti.components')
        .directive("validCpf", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.validacpf = function (modelValue) {
                        if (modelValue == '') {
                            //Para não informar 'CPF inválido' em caso de CPF não-obrigatório.
                            ngModel.$setValidity('validateCpf', true);
                            return true;
                        }

                        var isValid = CPF.validate(modelValue || '');

                        ngModel.$setValidity('validateCpf', isValid);
                        return isValid;
                    }
                }
            };
        });

})();