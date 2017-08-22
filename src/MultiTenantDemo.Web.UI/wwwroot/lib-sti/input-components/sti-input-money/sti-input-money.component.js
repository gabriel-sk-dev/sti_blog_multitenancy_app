(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputMoney', {
          templateUrl: 'lib-sti/input-components/sti-input-money/sti-input-money.html',
          controller: InputMoneyController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              required: '@',
              name: '@',
              label: '@',
              readOnly: '=?',
              autofocus: '@?'
          }
      });

    InputMoneyController.$inject = [];

    function InputMoneyController() {
        var vm = this;

        //Defaults
        vm.tooltipDirection = vm.tooltipDirection || 'right';
        vm.tooltipDelay = vm.tooltipDelay || '500';
    }

})();
