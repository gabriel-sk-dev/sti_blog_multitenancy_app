(function () {
    'use strict';

    angular
        .module('multitenantdemo.notAllowed')
        .controller('NotAllowedController', NotAllowedController);

    NotAllowedController.$inject = [];

    function NotAllowedController() {
        var vm = this;

        activate();

        function activate() {

        }
    }

})();