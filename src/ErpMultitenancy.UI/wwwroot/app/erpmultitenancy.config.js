(function () {
    'use strict';
    angular
        .module('erpmultitenancy')
        .config(loadErpModule);

    loadErpModule.$inject = ['$stateProvider'];
    function loadErpModule($stateProvider) {
        var clientNotFoundState = {
            name: 'tenantnotfound',
            url: '/newclient',
            templateUrl: 'app/authentication/tenant-not-found/tenant-not-found.html',
            controller: '',
            controllerAs: 'vm'
        };
        $stateProvider.state(clientNotFoundState.name, clientNotFoundState);

        var clientLogin = {
            name: 'tenantlogin',
            url: '/login',
            templateUrl: 'app/authentication/tenant-login/tenant-login.html',
            controller: '',
            controllerAs: 'vm'
        };
        $stateProvider.state(clientLogin.name, clientLogin);
    }
})();