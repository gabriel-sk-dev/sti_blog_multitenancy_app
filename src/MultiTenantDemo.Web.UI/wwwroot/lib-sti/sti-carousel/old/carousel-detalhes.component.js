(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('carouselDetalhes', {
          templateUrl: 'app-sti/sti-carousel/carousel-detalhes.html',
          controller: CarouselDetalhesController,
          controllerAs: 'vm',
          bindings: {
              selected: '='
          }
      });

    CarouselDetalhesController.$inject = ['$scope', '$mdDialog'];

    function CarouselDetalhesController($scope, $mdDialog) {
        var vm = this;
        vm.dados = angular.copy(vm.selected);
        vm.fechar = fecharFunction;
           
        function fecharFunction() {
            $mdDialog.cancel();
        };
    }

})();