(function () {
    'use strict';

    angular
        .module('multitenantdemo.invoices')
        .service('invoicesDataService', invoicesDataService);

    invoicesDataService.$inject = ["multitenantdemoRequesting"];

    function invoicesDataService(multitenantdemoRequesting) {

        return {
            getAll: getAll            
        };

        function getAll() {
            var url = 'Billing/Invoices';
            return multitenantdemoRequesting.get(url);
        }   

       
    }
})();