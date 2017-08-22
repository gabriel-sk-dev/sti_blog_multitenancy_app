(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputPassword', {
          transclude: true,
          templateUrl: 'lib-sti/input-components/sti-input-password/sti-input-password.html',
          controller: InputPasswordController,
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

    InputPasswordController.$inject = [];

    function InputPasswordController() {
        var vm = this;
    }

})();
