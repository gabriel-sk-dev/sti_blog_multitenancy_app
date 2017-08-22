(function () {
    'use strict';

    angular
        .module('multitenantdemo.print')
        .controller('PrintController', PrintController);

    PrintController.$inject = ['$scope', 'clubsDataService'];

    function PrintController($scope, clubsDataService) {
        var vm = this;
        $scope.getclube = getclube;

        activate();

        function activate() {
            clubsDataService.getAll()
                .then(function (clube) {
                    vm.clube = clube[0];
                });

            vm.data = new Date();
        }

        function getclube() {
            return vm.clube[0];
        }
    }
})();