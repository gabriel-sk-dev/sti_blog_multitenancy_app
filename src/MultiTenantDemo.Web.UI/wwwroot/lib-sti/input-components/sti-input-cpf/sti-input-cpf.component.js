(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputCpf', {
          templateUrl: 'lib-sti/input-components/sti-input-cpf/sti-input-cpf.html',
          controller: InputCpfController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              label: '@',
              name: '@',
              readOnly: '=?'
          }
      });

    function InputCpfController() {
        var vm = this;
    }

})();
