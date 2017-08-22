(function () {
    'use strict';

    angular
        .module('multitenantdemo.invoices')
        .controller('invoicesController', invoicesController);

    invoicesController.$inject = ['$scope', '$state', '$mdDialog', 'invoicesDataService'];

    function invoicesController($scope, $state, $mdDialog, invoicesDataService) {
        var vm = this;
        vm.invoices = [];
        activate();

        function activate() {
            invoicesDataService
                .getAll()
                .then(function (data) {
                    vm.invoices = data;
                });
        }

        
    }
})();