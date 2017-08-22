(function () {
    'use strict';

    angular
        .module('sti.competency')
        .service('stiCompetencyService', stiCompetencyService);

    stiCompetencyService.$inject = [];
    function stiCompetencyService() {
        var stiCompetencyService = {
            getCompetencyToDisplay: getCompetencyToDisplay
        };
        return stiCompetencyService;

        function getCompetencyToDisplay(competency) {
            var year = competency.key.substring(0, 4);
            var month = competency.key.substring(4);
            var displayMonth = "";
            if (month === "01")
                displayMonth = "janeiro";
            if (month === "02")
                displayMonth = "Fevereiro";
            if (month === "03")
                displayMonth = "Março";
            if (month === "04")
                displayMonth = "Abril";
            if (month === "05")
                displayMonth = "Maio";
            if (month === "06")
                displayMonth = "Junho";
            if (month === "07")
                displayMonth = "Julho";
            if (month === "08")
                displayMonth = "Agosto";
            if (month === "09")
                displayMonth = "Setembro";
            if (month === "10")
                displayMonth = "Outubro";
            if (month === "11")
                displayMonth = "Novembro";
            if (month === "12")
                displayMonth = "Dezembro";
            return displayMonth + "/" + year;
        }
    }
})();