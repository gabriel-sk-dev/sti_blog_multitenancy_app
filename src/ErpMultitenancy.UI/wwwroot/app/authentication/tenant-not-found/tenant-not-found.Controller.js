(function () {
    'use strict';
    angular
        .module('erpmultitenancy.authentication')
        .controller('tenantNotFoundController', tenantNotFoundController);

    tenantNotFoundController.$inject = ['tenancyUrl'];
    function tenantNotFoundController(tenancyUrl) {
        var vm = this;

        activate();

        function activate() {
            vm.tenantPrefix = tenancyUrl.extractTenant();
        }
    }
})();