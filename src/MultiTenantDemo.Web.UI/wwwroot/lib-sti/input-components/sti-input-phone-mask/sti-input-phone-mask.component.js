(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputPhoneMask', {
          templateUrl: 'lib-sti/input-components/sti-input-phone-mask/sti-input-phone-mask.html',
          controller: InputTelefoneController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@',
              readOnly: '=?'
          }
      });

    InputTelefoneController.$inject = [];

    function InputTelefoneController() {
        var vm = this;
    }

})();
