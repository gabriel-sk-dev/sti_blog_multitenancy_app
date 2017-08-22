(function () {
    'use strict';

    angular
        .module('multitenantdemo')
        .config(Interceptors);

    Interceptors.$inject = ['$httpProvider'];
    function Interceptors($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }

    angular
        .module('multitenantdemo')
        .factory('httpRequestInterceptor', httpRequestInterceptor);

    httpRequestInterceptor.$inject = ['$injector', 'multitenantdemoTenantUrl'];
    function httpRequestInterceptor($injector,multitenantdemoTenantUrl) {

        return {
            request: request            
        };

        function request(config) {
            config.headers.Tenant = multitenantdemoTenantUrl.getPrefix();
            return config;
        }   
    }
})();


