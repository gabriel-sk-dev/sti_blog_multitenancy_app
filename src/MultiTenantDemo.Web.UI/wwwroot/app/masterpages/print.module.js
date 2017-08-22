(function () {
	'use strict';

	angular
		.module('multitenantdemo.print', [])
		.config(Config);

	Config.$inject = ['$stateProvider'];
	function Config($stateProvider) {

		$stateProvider
			.state('print', {
				templateUrl: "app/masterpages/print/print.html",
				controllerAs: "vm",
				controller: "PrintController"
			});
	}

})();