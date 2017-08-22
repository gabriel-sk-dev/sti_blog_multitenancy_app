/*
 * Breadcrumbs - é o caminho com hierarquia de navegação do site. Também conhecido como migalha.
 * Exemplo: <sti-breadcrumbs itens="[{ title : 'Adesão', route: 'main.adesao' }, { title: 'Cadastro', route: 'main.cadastro', routerParameter: { id : 1 }]" />
 */

(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('stiBreadcrumbs', {
          templateUrl: 'lib-sti/sti-breadcrumbs/sti-breadcrumbs.html',
          controller: BreadcrumbsController,
          controllerAs: 'vm',
          bindings: {
              itens: '='
          }
      });

    BreadcrumbsController.$inject = ['$state', '$scope'];

    function BreadcrumbsController($state, $scope) {
        var vm = this;

        vm.goToRouter = goToRouter;
        vm.goHome = goHome;

        function goToRouter(item) {
            var router = (item.route) ? item.route : '';
            var routerParameter = (!!item.routerParameter) ? item.routerParameter : '';
            if (item.route)
                return $state.go(router, routerParameter);
        }

        function goHome() {
            return $state.go('main.overview');
        }
    }

})();
