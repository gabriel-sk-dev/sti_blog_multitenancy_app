(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputPhone', {
          templateUrl: 'lib-sti/input-components/sti-input-phone/sti-input-phone.html',
          controller: InputPhoneController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@',
              maxlength: '@',
              minlength: '@',
              readOnly: '=?'
          }
      });

    function InputPhoneController() {
        var vm = this;
    }

})();
