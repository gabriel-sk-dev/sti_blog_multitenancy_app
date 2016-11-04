(function () {
    'use strict';
    angular
        .module('erpmultitenancy')
        .run(runErpModule);

    runErpModule.$inject = ['$tenancyUrlService', '$tenancyDataService', '$state'];
    function runErpModule($tenancyUrlService, $tenancyDataService, $state) {
        //todo: block ui

        var tenantPrefix = $tenancyUrlService.extractTenant();
        var tenant = $tenancyDataService.Get(tenantPrefix);

        //todo: unblock ui

        if (tenant === undefined) {
            $state.go('tenantnotfound');
        }
            
        $state.go('login');

    }

})();