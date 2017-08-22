(function () {
    'use strict';

    angular
      .module('multitenantdemo.components')
      .component('carousel', {
          templateUrl: 'app/Common/components/carousel/carousel-contrato.html',
          controller: CarouselController,
          controllerAs: 'vm',
          bindings: {
              itens: '=',
              itemSelected: '=',
              template: '@'
          }
      });

    CarouselController.$inject = ['$scope', '$mdDialog'];

    function CarouselController($scope, $mdDialog) {
        var vm = this;
        vm.Title = "Title do Component Carousel";
        vm.Select = select;
        vm.detalhes = detalhesFunction;

        function select(item) {
            vm.itemSelected = item;
        }

        function detalhesFunction(item) {
            var _scope = $scope.$new(true);
            _scope.selected = item;

            $mdDialog.show({
                scope: _scope,
                template: '<carousel-detalhes selected="selected" />'
            });
        }
    }
    
})();
