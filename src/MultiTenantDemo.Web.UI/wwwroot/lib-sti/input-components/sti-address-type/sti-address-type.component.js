(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiAddressType', {
          templateUrl: 'lib-sti/input-components/sti-select/sti-select.html',
          controller: stiAddressTypeController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              name: '@',
              label: '@',
              required: '@',
              readOnly: '=?'
          }
      });

    stiAddressTypeController.$inject = [];

    function stiAddressTypeController() {
        var vm = this;
        vm.listaSelect = [{ key: 1, value: "Residencial" }, { key: 2, value: "Comercial" }, { key: 9, value: "Outro" }];
    }

})();
