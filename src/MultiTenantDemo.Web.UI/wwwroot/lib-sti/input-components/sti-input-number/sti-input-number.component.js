(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputNumber', {
          templateUrl: 'lib-sti/input-components/sti-input-number/sti-input-number.html',
          controller: InputNumberController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@',
              readOnly: '=?',
              min: '@',
              max: '@',
              maxlength: '@',
              tooltip: '@',
              tooltipDirection: '@',
              tooltipDelay: '@'
          }
      });

    InputNumberController.$inject = [];

    function InputNumberController() {
        var vm = this;

        //Defaults
        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDelay = vm.tooltipDelay || '500';
        vm.min = vm.min || '0';
        vm.max = vm.max || '10000000';
        vm.maxlength = vm.maxlength || '15';
    }

})();
