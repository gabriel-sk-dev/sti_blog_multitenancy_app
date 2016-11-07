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

        function getFunction(tenant) {
            var url = "http://localhost:60000/api/tenancy/tenant/"+tenant;
            var promise = $http.get(url), deferObject = deferObject || $q.defer();

            promise
                .then(
                    function (answer) {
                        deferObject.resolve(answer);
                    },
                    function (reason) {
                        deferObject.reject(reason);
                    });

            return deferObject.promise;
        }

    }
})();