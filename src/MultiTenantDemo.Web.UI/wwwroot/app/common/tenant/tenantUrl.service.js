(function () {
    'use strict';

    angular.module('common.tenant')
    .factory('multitenantdemoTenantUrl', TenantUrlService);

    TenantUrlService.$inject = ['$location'];

    function TenantUrlService($location) {
        return {
            getPrefix: getPrefix
        };

        function getPrefix() {
            var hostArray = $location.host().split('.');
            if (hostArray.length === 1)
                return "*";
            return hostArray[0];
        }
    }

})();