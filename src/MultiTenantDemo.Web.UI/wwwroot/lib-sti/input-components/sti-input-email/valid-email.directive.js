(function () {
    'use strict';

    angular
        .module('sti.components')
        .directive("validEmail", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.validaemail = function (modelValue) {
                        var isValid = validaEmail(modelValue || '');

                        ngModel.$setValidity('validateEmail', isValid);
                        return isValid;
                    }
                }
            };
        });

    function validaEmail(txt) {
        var _regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return txt.length > 0 && _regexEmail.test(txt);
    }

})();