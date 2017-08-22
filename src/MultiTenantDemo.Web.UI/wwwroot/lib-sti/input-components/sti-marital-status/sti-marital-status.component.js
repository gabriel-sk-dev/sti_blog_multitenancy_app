(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiMaritalStatus', {
          templateUrl: 'lib-sti/input-components/sti-select/sti-select.html',
          controller: stiMaritalStatusController,
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

    stiMaritalStatusController.$inject = [];

    function stiMaritalStatusController() {
        var vm = this;
        vm.listaSelect = [
            { key: 1, value: "Solteiro" },
            { key: 2, value: "Casado" },
            { key: 3, value: "Separado" },
            { key: 4, value: "Divorciado" },
            { key: 5, value: "Viúvo" },
            { key: 6, value: "União estável" }
        ];
    }

})();
