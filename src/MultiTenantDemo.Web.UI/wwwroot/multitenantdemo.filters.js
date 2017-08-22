(function () {
    'use strict';

    angular.module('multitenantdemo')
        .filter('real', function ($filter) {
            return function (input) {
                if (!input)
                    input = 0;
                var output = $filter('currency')(input);
                return (output.slice(0, 2) + " " + output.slice(2));
            };
        });

})();