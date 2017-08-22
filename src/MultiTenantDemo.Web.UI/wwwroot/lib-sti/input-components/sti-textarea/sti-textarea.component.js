(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiTextarea', {
          templateUrl: 'lib-sti/input-components/sti-textarea/sti-textarea.html',
          controller: TextareaController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              name: '@',
              label: '@',
              required: '@',
              maxlength: '@',
              readOnly: '=?',
              tooltip: '@',
              tooltipDirection: '@',
              tooltipDelay: '@',
              rows: '@'
          }
      });

    TextareaController.$inject = [];

    function TextareaController() {
        var vm = this;

        //Defaults
        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDelay = vm.tooltipDelay || '500';
        vm.rows = vm.rows || 1;
    }

})();
