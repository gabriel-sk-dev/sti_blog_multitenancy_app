(function () {
    'use strict';

    angular
      .module('sti.components')
      .component('', {
          template: '<img class="thumbImage" src="" height="200" alt="Image preview..." />',
          controller: ngThumbController,
          controllerAs: 'vm'
      });

    ngThumbController.$inject = [];

    function ngThumbController() {
    }
       
})();