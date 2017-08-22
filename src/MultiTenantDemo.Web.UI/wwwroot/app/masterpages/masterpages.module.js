(function () {
    'use strict';

    angular
        .module('multitenantdemo.masterpages', [])
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {

        $stateProvider
            .state('main', {
                templateUrl: "app/masterpages/main/main.html",
                controllerAs: "vm",
                controller: "MainController"
            });
    }

})();