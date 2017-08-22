(function () {
    'use strict';

    /* Máscara genérica
     *
     * Exemplo: {{vm.assignor.cnpj.value | mask: "99.999.999/9999-99" }}
     */

    angular
      .module('sti.components')
      .filter('mask', mask);
      
    mask.$inject = ['MaskService', '$timeout'];

    function mask(MaskService, $timeout) {
        return function (text, mask) {            
            if(text){
                var maskService = MaskService.create();
                maskService.generateRegex({ mask: mask });
                return maskService.getViewValue(text).withDivisors();
            }
        };
    }

    /* Máscara para CNPJ
     *
     * Exemplo: {{vm.assignor.cnpj.value | maskCnpj }}
     */
   
    angular
      .module('sti.components')
      .filter('maskCnpj', maskCnpj);
    
    maskCnpj.$inject = ['MaskService'];
    
    function maskCnpj(MaskService) {
        return function (text) {       
            if (text) {
                var maskService = MaskService.create();
                maskService.generateRegex({ mask: "99.999.999/9999-99" });
                return maskService.getViewValue(text).withDivisors();
            }
        };
    }

    /* Máscara para CPF
     *
     * Exemplo: {{vm.person.cpf.value | maskCpf }}
     */

    angular
      .module('sti.components')
      .filter('maskCpf', maskCpf);

    maskCpf.$inject = ['MaskService'];

    function maskCpf(MaskService) {
        return function (text) {
            if (text) {
                var maskService = MaskService.create();
                maskService.generateRegex({ mask: "999.999.99-99" });
                return maskService.getViewValue(text).withDivisors();
            }
        };
    }    

})();