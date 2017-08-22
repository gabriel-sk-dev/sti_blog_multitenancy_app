(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiGender', {
          templateUrl: 'lib-sti/input-components/sti-select/sti-select.html',
          controller: stiGenderController,
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

    stiGenderController.$inject = [];

    function stiGenderController() {
        var vm = this;
        vm.listaSelect = [{ key: "M", value: "Masculino" }, { key : "F", value: "Feminino" }];
    }

})();
