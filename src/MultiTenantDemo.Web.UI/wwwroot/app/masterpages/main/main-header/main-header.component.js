(function () {
    'use strict';

    angular
      .module('multitenantdemo.masterpages')
      .component('mainHeader', {
          templateUrl: 'app/masterpages/main/main-header/main-header.html',
          controller: HeaderController,
          controllerAs: 'vm',
          bindings: {
              user: '='
          }
      });

    HeaderController.$inject = ['$scope', '$state', '$mdSidenav'];

    function HeaderController($scope, $state, $mdSidenav) {
        var vm = this;

        vm.openMenu = openMenu;
        vm.goToHome = goToHome;        

        activate();

        function activate() { }

        function goToHome() {
            $state.go('main.overview');
        }

        function openMenu() {
            $mdSidenav('left').toggle();
        }        
    }

})();
