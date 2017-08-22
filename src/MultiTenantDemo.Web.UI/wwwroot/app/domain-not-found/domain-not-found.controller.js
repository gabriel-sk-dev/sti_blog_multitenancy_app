(function () {
    'use strict';

    angular
        .module('multitenantdemo.domainNotFound')
        .controller('DomainNotFoundController', DomainNotFoundController);

    DomainNotFoundController.$inject = ['$scope', '$state'];

    function DomainNotFoundController($scope, $state) {
        var vm = this;

        vm.goToRegister = goToRegister;
        vm.consult = consult;

        activate();

        function activate() {
            vm.showForm = false;
            vm.subDomain = location.hostname.split('.')[0];
        }

        function goToRegister() {}

        function consult() {}
    }
})();