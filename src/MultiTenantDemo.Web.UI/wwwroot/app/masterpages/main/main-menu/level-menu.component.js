(function () {
    'use strict';

    angular
      .module('multitenantdemo.masterpages')
      .component('levelMenu', {
          templateUrl: 'app/masterpages/main/main-menu/level-menu.html',
          controller: levelMenuController,
          controllerAs: 'vm',
          bindings: {
              menu: '=',
              nivel: '@'
          }
      });

    levelMenuController.$inject = ['$state', '$mdSidenav', '$mdDialog'];

    function levelMenuController($state, $mdSidenav, $mdDialog) {
        var vm = this;

        vm.expandSubItems = expandSubItems;
        vm.shouldShowItemWithSubItem = shouldShowItemWithSubItem;
        vm.shouldShowItemWithoutSubItem = shouldShowItemWithoutSubItem;
        vm.goTo = goTo;

        activate();

        function activate() {
            if (vm.nivel == '1')
                vm.menu.expand = true;
            else
                vm.menu.expand = false;
        }

        function expandSubItems(menu) {
            menu.subItems.forEach(function (itemMenu) {
                itemMenu.expand = !itemMenu.expand;
            });
        }

        function shouldShowItemWithSubItem(item) {
            return item.route === '' && item.subItems.length > 0;
        }

        function shouldShowItemWithoutSubItem(item) {
            var temSubItens = !!item.subItems;
            return item.route != '' && !temSubItens;
        }

        function goTo(menu) {
            if (menu.route) {
                $state.go(menu.route);
                $mdSidenav('left').toggle();
            }
            else if (menu.popup) {
                $mdDialog.show({ template: menu.popup });
                $mdSidenav('left').toggle();
            }
        }

    }

})();

