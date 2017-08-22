(function () {
    'use strict';

    angular
        .module('common.request')
        .provider('multitenantdemoRequesting', multitenantdemoRequestingProvider);

    function multitenantdemoRequestingProvider() {        

        return {
            $get: requestService
        };

        function requestService($http, $q, BASE_URL_API) {
            return {
                'getBaseUrl': getBaseUrl,
                'get': get,
                'post': post,
                'put': put,
                'delete': _delete,
                'patch': patch
            };

            function getBaseUrl() {
                var baseUrl = "http://" + BASE_URL_API;
                return baseUrl;
            }

            function get(url, config) {
                var completeUrl;
                if (config && config.url)
                    completeUrl = config.url;
                else
                    completeUrl = getBaseUrl() + url;
                var promise = $http.get(completeUrl);

                if (config && config.returnStatusCode)
                    return promise;

                var deferred = $q.defer();
                promise.then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });

                return deferred.promise;
            }

            function post(url, data, config) {
                var completeUrl = getBaseUrl() + url;
                var promise = $http.post(completeUrl, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (config && config.returnStatusCode)
                    return promise;

                var deferred = $q.defer();
                promise.then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });

                return deferred.promise;
            }

            function put(url, data, config) {
                var completeUrl = getBaseUrl() + url;
                var promise = $http.put(completeUrl, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (config && config.returnStatusCode)
                    return promise;

                var deferred = $q.defer();
                promise.then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });

                return deferred.promise;
            }

            function _delete(url, config) {
                var completeUrl = getBaseUrl() + url;
                var promise = $http.delete(completeUrl);

                if (config && config.returnStatusCode)
                    return promise;

                var deferred = $q.defer();
                promise.then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });

                return deferred.promise;
            }

            function patch(url, data, config) {
                var completeUrl = getBaseUrl() + url;
                var promise = $http.patch(completeUrl, JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (config && config.returnStatusCode)
                    return promise;

                var deferred = $q.defer();
                promise.then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error.data);
                });

                return deferred.promise;
            }

        }
    }

})();
