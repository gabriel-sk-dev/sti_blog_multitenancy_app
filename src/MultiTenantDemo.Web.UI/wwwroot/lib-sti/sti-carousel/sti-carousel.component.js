(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiCarousel', {
          template: '<div ng-include="vm.getTemplate()"></div>',
          controller: CarouselController,
          controllerAs: 'vm',
          bindings: {
              itens: '=',
              itemSelected: '=',
              name: '@',
              template: '@'
          }
      });

    CarouselController.$inject = ['$scope', '$mdDialog'];

    function CarouselController($scope, $mdDialog) {
        var vm = this;
        vm.Select = select;
        vm.getTemplate = getTemplate;
        
        function select(item) {
            vm.itemSelected = item;
            //console.log("Carousel" + vm.nome + ":Selecionado",item);
            $scope.$emit("Carousel" + vm.name + ":Selecionado", item);
        }
        
        function getTemplate() {
            if (vm.template)
                return vm.template;
            else
                return 'lib-sti/sti-carousel/carousel.html';
        }
    }
    
})();


