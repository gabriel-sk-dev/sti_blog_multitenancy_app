(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputEmail', {
          templateUrl: 'lib-sti/input-components/sti-input-email/sti-input-email.html',
          controller: InputEmailController,
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

    function InputEmailController() {
        var vm = this;
    }

})();
