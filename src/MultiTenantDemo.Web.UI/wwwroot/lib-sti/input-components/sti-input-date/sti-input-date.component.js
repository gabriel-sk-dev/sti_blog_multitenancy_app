(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiInputDate', {
          templateUrl: 'lib-sti/input-components/sti-input-date/sti-input-date.html',
          controller: InputDateController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              modelDate: '=model',
              //required: '@',
              name: '@',
              label: '@',
              readOnly: '=?'
          }
      });

    InputDateController.$inject = ['$scope', 'moment'];

    function InputDateController($scope, moment) {
        var vm = this;

        activate();

        function activate() {
            //TODO: validar a forma correta de usar o 'required' no componente md-datepicker-custom,
            // para que as datas não sejam sempre obrigatórias.
            vm.required = true;
            vm.modelDate = vm.modelDate || '';
        }
    }

})();
