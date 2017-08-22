(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputCnpj', {
          templateUrl: 'lib-sti/input-components/sti-input-cnpj/sti-input-cnpj.html',
          controller: InputCnpjController,
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

    function InputCnpjController() {
        var vm = this;
    }

})();
