(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputRadiobox', {
          templateUrl: 'app/Common/components/input-components/multitenantdemo-input-radiobox/multitenantdemo-input-radiobox.html',
          controller: RadioBoxController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@?',
              readOnly: '=?',

              //options[0] é o array de opções
              //options[1] é a função a ser executada ao selecionar uma nova opção
              options: '='
          }
      });

    function RadioBoxController() {
        var vm = this;
    }

})();
