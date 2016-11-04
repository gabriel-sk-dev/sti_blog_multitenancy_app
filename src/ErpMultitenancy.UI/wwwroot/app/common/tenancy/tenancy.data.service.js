(function () {
    'use strict';
    angular
        .module('common.tenancy')
        .factory('tenancyData', tenancyDataService);

    tenancyDataService.$inject = ['$http', '$q'];
    function tenancyDataService($http, $q) {
        return {
            get: getFunction
        };

        function getFunction() {
            var url = "";

            var promise = $http.get(url),
                            deferObject = deferObject || $q.defer();
        }

    }
})();