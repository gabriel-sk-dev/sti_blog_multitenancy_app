(function () {
    'use strict';

    angular
        .module('multitenantdemo.notAllowed')
        .config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {
        $stateProvider
            .state('main.notAllowed', {
                url: "/nao-permitido",
                templateUrl: "app/not-allowed/not-allowed.html",
                controllerAs: "vm",
                controller: "NotAllowedController"
            });

    }
})();