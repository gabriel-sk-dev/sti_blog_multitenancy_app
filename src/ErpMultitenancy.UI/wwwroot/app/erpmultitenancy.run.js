(function () {
    'use strict';
    angular
        .module('erpmultitenancy')
        .run(runErpModule);

    runErpModule.$inject = ['tenancyUrl', 'tenancyData', '$state'];
    function runErpModule(tenancyUrl, tenancyData, $state) {
        //todo: block ui

        var tenantPrefix = tenancyUrl.extractTenant();
        var tenant = tenancyData.get(tenantPrefix);

        //todo: unblock ui

        if (tenant === undefined) {
            return $state.go('tenantnotfound');
        }
            
        $state.go('tenantlogin');
    }

})();