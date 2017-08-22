(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputFullName', {
          templateUrl: 'lib-sti/input-components/sti-input-full-name/sti-input-full-name.html',
          controller: InputFullNameController,
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

    function InputFullNameController() {
        var vm = this;
    }

})();
