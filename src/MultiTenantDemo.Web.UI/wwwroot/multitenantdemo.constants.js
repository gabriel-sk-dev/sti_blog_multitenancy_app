(function () {
    'use strict';

    var hostname = window.location.hostname;
    var multitenantdemo = angular.module('multitenantdemo');


    if (hostname.includes("localhost")) {
        multitenantdemo.constant('BASE_URL_API', 'localhost:5001/api/');
        multitenantdemo.constant('BASE_URL_SIGNALR', 'http://localhost:8090');
    }
    else {
        //public api            
    }

})();