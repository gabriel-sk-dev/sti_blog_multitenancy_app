(function () {
    'use strict';
    angular
        .module('erpmultitenancy')
        .config(loadErpModule);

    loadErpModule.$inject = ['$stateProvider'];
    function loadErpModule($stateProvider) {
        var clientNotFoundState = {
            name: 'tenantnotfound',
            url: '',
            templateUrl: 'app/authentication/tenant-not-found/tenant-not-found.html',
            controller: 'tenantNotFoundController',
            controllerAs: 'vm'
        };
        $stateProvider.state(clientNotFoundState.name, clientNotFoundState);

        var clientLogin = {
            name: 'tenantlogin',
            url: '',
            params: {tenant: null},
            templateUrl: 'app/authentication/tenant-login/tenant-login.html',
            controller: 'tenantLoginController',
            controllerAs: 'vm'
        };
        $stateProvider.state(clientLogin.name, clientLogin);
    }
})();