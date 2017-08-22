(function () {
    'use strict';

    angular
        .module('multitenantdemo', [
            //libs
            'ui.router',
            'ngMaterial',
            'angularMoment',
            'exceptionOverwrite',
            'AngularPrint',

            //app
            'multitenantdemo.common',
            'multitenantdemo.masterpages',
            'multitenantdemo.domainNotFound',            
            'multitenantdemo.notAllowed',
            'multitenantdemo.invoices'
        ]);

    var _multitenantdemoRequestingProvider;

    angular
        .module('multitenantdemo')
        .config(Config)
        .config(ConfigDate);

    Config.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider', 'multitenantdemoRequestingProvider'];
    function Config($urlRouterProvider, $locationProvider, $httpProvider, multitenantdemoRequestingProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/invoices");

        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        //Remove the header containing XMLHttpRequest used to identify ajax call 
        //that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        _multitenantdemoRequestingProvider = multitenantdemoRequestingProvider;
    }

    ConfigDate.$inject = ['$mdDateLocaleProvider'];
    function ConfigDate($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function (date) {
            return date ? moment(date).format('DD/MM/YYYY') : '';
        };

        $mdDateLocaleProvider.parseDate = function (dateString) {
            if (dateString === null || dateString.length === 0)
                return null;

            var m = moment(dateString, 'DD/MM/YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
    }

    angular
        .module('multitenantdemo')
        .run(runmultitenantdemo);

    runmultitenantdemo.$inject = ['$state', 'multitenantdemoTenantUrl', 'tenantDataService'];
    function runmultitenantdemo($state, multitenantdemoTenantUrl, tenantDataService) {
        var tenantName = multitenantdemoTenantUrl.getPrefix();
        tenantDataService
            .get(tenantName)
            .then(
                function (data) {
                    var tenant = data;
                },
                function (error) {
                    return $state.go('domainNotFound');
                });
    }


    /* interceptor de erros do Angular temporário */
    angular.
        module('exceptionOverwrite', []);

    if (window.location.hostname === 'localhost') {
        angular.
            module('exceptionOverwrite').
            factory('$exceptionHandler', [function () {
                return function myExceptionHandler(exception, cause) {
                    notification.warning(exception, "Erro interno (Angular)");
                };
            }]);
    }

})();