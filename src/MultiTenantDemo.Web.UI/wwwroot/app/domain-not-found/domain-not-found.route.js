(function () {
    'use strict';

    angular
        .module('multitenantdemo.domainNotFound')
        .config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {
        $stateProvider
            .state('domainNotFound', {
                url: "/dominionaoencontrado",
                templateUrl: "app/domain-not-found/domain-not-found.html",
                controllerAs: "vm",
                controller: "DomainNotFoundController"
            });
    };
})();