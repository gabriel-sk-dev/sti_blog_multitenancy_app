(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiSelect', {
          templateUrl: 'lib-sti/input-components/sti-select/sti-select.html',
          controller: InputSelectController,
          controllerAs: 'vm',
          bindings: {
              form: '=',
              model: '=',
              name: '@',
              label: '@',
              placeholder: "@",
              itens: '=',
              itemNameKey: '@',
              itemNameValue: '@',
              required: '@',
              readOnly: '=',
              fnChange: '='
          }
      });

    InputSelectController.$inject = ['$timeout', '$scope'];

    function InputSelectController($timeout, $scope) {
        var vm = this;
        var _lista = [];

        convertListToDefaultFormat();

        $scope.$watchCollection('vm.itens', function (newValue, oldValue) {
            if (newValue && newValue != oldValue) {
                convertListToDefaultFormat();
            }
        });

        function convertListToDefaultFormat() {
            $timeout(function () {
                if (vm.itemNameKey && vm.itemNameValue && vm.itens && vm.itens.length) {
                    _lista = [];
                    for (var index = 0; index < vm.itens.length; ++index) {
                        _lista.push({
                            key: vm.itens[index][vm.itemNameKey],
                            value: vm.itens[index][vm.itemNameValue]
                        });
                    }

                    vm.listaSelect = _lista;
                } else {
                    vm.listaSelect = { key: null, value: "Nenhum iten disponível." };
                }
            });
        }
    }

})();
