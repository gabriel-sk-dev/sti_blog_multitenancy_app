(function () {
    'use strict';
    angular
        .module('common.tenancy')
        .factory * ('tenancyUrl', tenancyUrlService);

    tenancyUrlService.$inject = ['$location'];
    function tenancyUrlService($location) {
        return {
            extractTenant: extractTenantFunction
        };

        function extractTenantFuncion() {
            var tenantPrefix = $location.host().split('.')[0];

            //todo: check hostname

            return tenantPrefix;
        }
    }
})();