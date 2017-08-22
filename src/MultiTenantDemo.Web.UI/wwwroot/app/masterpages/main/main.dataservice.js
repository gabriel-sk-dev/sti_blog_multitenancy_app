(function () {
    'use strict';

    angular
        .module('multitenantdemo.masterpages')
        .service('mainDataService', mainDataService);

    mainDataService.$inject = ['multitenantdemoRequesting'];

    function mainDataService(multitenantdemoRequesting) {
                
        return {
            loadApiVersion: loadApiVersion,
            loadUiVersion: loadUiVersion
        };
        
        function loadApiVersion() {
        }

        function loadUiVersion() {
        }
    }
})();