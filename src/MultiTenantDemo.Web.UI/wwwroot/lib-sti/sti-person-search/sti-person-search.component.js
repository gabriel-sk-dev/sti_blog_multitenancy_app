(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiPersonSearch', {
          templateUrl: 'lib-sti/sti-person-search/sti-person-search.html',
          controller: StiPersonSearchController,
          controllerAs: 'vm',
          bindings: {
              selectedItem: '=',
              selectedItemChange: '=',
              searchValue: '=',
              query: '=',
              itemText: '@',
              floatingLabel: '@'
          }
      });

    StiPersonSearchController.$inject = [];

    function StiPersonSearchController() {
        var vm = this;
        vm.InSelectedItemChange = InSelectedItemChange;

        function InSelectedItemChange() {
            vm.selectedItem = vm.InSelectedItem;
            console.log('selectedItem', vm.selectedItem);
            vm.selectedItemChange();
        }
    }

})();
/* <sti-person-search
 *     selected-item="vm.selectedPerson"
 *     selected-item-change='vm.onPersonSelected'
 *     search-value="vm.searchValue"
 *     query="vm.query"
 *     floating-label="Consultar associado">
 * </sti-person-search>
*/