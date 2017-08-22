//NÃO usar IIFE neste arquivo

var DEBUG = (window.location.hostname.indexOf('localhost') !== -1);
if (!DEBUG) {
    console = console || {};
    console.log = function () { };
}

/*Alternativas as funções nativas do JavaScript  para browsers não implementam o ECMAScript atual.
(Versões do IE anteriores ao Edge)*/

if (!Array.prototype.includes) {
    console.log('Array.prototype.includes');

    Array.prototype.includes = function () {
        'use strict';
        return Array.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

if (!String.prototype.includes) {
    console.log('String.prototype.includes');

    String.prototype.includes = function () {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

if (!Array.prototype.find) {
    console.log('Array.prototype.find');
    Array.prototype.find = function (predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

if (!String.prototype.startsWith) {
    console.log('String.prototype.startsWith');

    function StartsWith(str, subStr) {
        return str.lastIndexOf(subStr, 0) === 0;
    }

    String.prototype.startsWith = function () {
        'use strict';
        return StartsWith(this, arguments);
    };
}

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
};


/* Global functions */

function ddmmyyyy(date) {
    return dateFormat(date, "DD/MM/YYYY");
}
function dateFormat(date, customFormat) {
    date = date || new Date();
    customFormat = customFormat || "DD/MM/YYYY";
    return moment(date).format(customFormat);
}

function getSubdomain() {
    var splitted = window.location.hostname.split('.');
    if (splitted.length <= 1) return '';
    return splitted[0];
}

// em teste
function pad(str, length) {
    const resto = length - String(str).length;
    return '0'.repeat(resto > 0 ? resto : '0') + str;
}
