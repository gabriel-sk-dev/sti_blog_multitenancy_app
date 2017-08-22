(function () {
    'use strict';

    angular
        .module('multitenantdemo.invoices')
        .config(Config);

    Config.$inject = ['$stateProvider'];

    function Config($stateProvider) {
        $stateProvider
            .state('main.invoices', {
                url: "/invoices",
                templateUrl: "app/financial/invoices/invoices.html",
                controllerAs: "vm",
                controller: "invoicesController",
                params: {
                    item: null,
                    isNewItem: null
                }
            });
    }
})();