(function () {
    'use strict';

    angular
      .module('multitenantdemo.masterpages')
      .component('mainMenu', {
          templateUrl: 'app/masterpages/main/main-menu/main-menu.html',
          controller: MenuController,
          controllerAs: 'vm',
          bindings: {
              user: '='
          }
      });

    MenuController.$inject = [];

    function MenuController() {
        var vm = this;

        activate();

        function activate() {            
            vm.Menu = [];
            setMenuItems();
        }

        function setMenuItems() {
            //Manter ordem alfabética, mas com "Visão Geral" no topo

            vm.Menu.push({ label: 'Invoices', route: 'main.invoices', icon: 'home' });
        }
    }

})();
