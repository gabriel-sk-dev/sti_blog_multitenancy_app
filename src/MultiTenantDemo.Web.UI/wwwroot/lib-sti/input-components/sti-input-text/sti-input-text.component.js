(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputText', {
          transclude: true,
          templateUrl: 'lib-sti/input-components/sti-input-text/sti-input-text.html',
          controller: InputTextController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@',
              maxlength: '@',
              minlength: '@',
              readOnly: '=?',
              tooltip: '@',
              tooltipDirection: '@',
              tooltipDelay: '@'
          }
      });

    InputTextController.$inject = [];

    function InputTextController() {
        var vm = this;

        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDelay = vm.tooltipDelay || '500';
    }

})();
