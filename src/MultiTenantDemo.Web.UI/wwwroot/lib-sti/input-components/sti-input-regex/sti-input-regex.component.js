(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputRegex', {
          transclude: true,
          templateUrl: 'lib-sti/input-components/sti-input-regex/sti-input-regex.html',
          controller: InputMaskController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              regex: '@',
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

    InputMaskController.$inject = [];

    function InputMaskController() {
        var vm = this;
        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDelay = vm.tooltipDelay || '500';
    }

})();
