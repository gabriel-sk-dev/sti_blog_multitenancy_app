(function () {
    'use strict';

    angular
        .module('multitenantdemo.masterpages')
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope', '$q', '$timeout', 'mainDataService'];

    function MainController($rootScope, $q, $timeout, mainDataService) {        

        var vm = this;
        vm.scrollBottom = scrollBottom;
        vm.scrollTop = scrollTop;

        activate();

        function activate() {
            watchState();
            showButtomScroll();
        }

        function scrollBottom() {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        }

        function scrollTop() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
        
        function watchState() {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
                $timeout(function () {
                    showButtomScroll();
                },500);
            });
        }

        function showButtomScroll() {
            vm.buttonChevronDown = false;
            vm.buttonChevronUp = false;
            if ($(document).height() > $(window).height()) {
                vm.buttonChevronUp = false;
                vm.buttonChevronDown = true;
            }
            $(window).scroll(function () {             
                setBottonScroll();
            });
        }

        function setBottonScroll() {            
            if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
                $timeout(function () {
                    vm.buttonChevronUp = true;
                    vm.buttonChevronDown = false;
                });
            } else {
                $timeout(function () {
                    vm.buttonChevronUp = false;
                    vm.buttonChevronDown = true;
                });
            }
        }
    }

})();