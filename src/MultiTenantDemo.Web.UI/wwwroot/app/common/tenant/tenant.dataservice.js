(function () {
    'use strict';

    angular
        .module('common.tenant')
        .service('tenantDataService', tenantDataService);

    tenantDataService.$inject = ['multitenantdemoRequesting'];

    function tenantDataService(multitenantdemoRequesting) {
        var tenantDataService = {
            get: get
        };

        return tenantDataService;

        function get(tenantName) {
            return multitenantdemoRequesting.get('tanancy/tenants/'+ tenantName);
        }
    }
})();