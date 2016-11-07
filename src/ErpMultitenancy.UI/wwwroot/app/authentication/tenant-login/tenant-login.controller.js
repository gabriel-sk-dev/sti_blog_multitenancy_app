(function () {
    'use strict';
    angular
        .module('erpmultitenancy.authentication')
        .controller('tenantLoginController', tenantLoginController);

    tenantLoginController.$inject = ['$stateParams'];
    function tenantLoginController($stateParams) {
        var vm = this;

        activate();

        function activate() {            
            vm.clientName = $stateParams.tenant.name;
        }
    }
})();