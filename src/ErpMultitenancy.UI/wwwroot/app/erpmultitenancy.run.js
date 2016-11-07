(function () {
    'use strict';
    angular
        .module('erpmultitenancy')
        .run(runErpModule);

    runErpModule.$inject = ['tenancyUrl', 'tenancyData', '$state'];
    function runErpModule(tenancyUrl, tenancyData, $state) {
        
        var tenantPrefix = tenancyUrl.extractTenant();
        if (tenantPrefix === "")
            return $state.go('tenantnotfound');

        var tenantPromisse = tenancyData.get(tenantPrefix);
        tenantPromisse.then(
            function (sucessData) {
                console.log(sucessData);
                return $state.go('tenantlogin', {tenant : sucessData.data});
            },
            function (errorData) {
                console.log(errorData);
                return $state.go('tenantnotfound');
        });           
    }
})();