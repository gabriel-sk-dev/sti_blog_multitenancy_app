/*
Notification Class:
>> Ex: notification.info(message);
*/
//var notification = toastr;
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return (function () {

            var notification = {
                info: info,
                warning: warning,
                success: success,
                error: error,
                remove: remove,
                waiting: waiting,
                clear: clear
            };

            return notification;

            function info(message, title) {
                toastr.info(message, title);
            }

            function warning(message, title) {
                toastr.warning(message, title);
            }

            function success(message, title) {
                toastr.success(message, title);
            }

            function error(message, title) {
                toastr.error(message, title);
            }

            function remove() {
                toastr.remove();
            }

            function clear() {
                toastr.clear();
            }

            function waiting(message, title) {
                var options = {
                    closeButton: true, 
                    progressBar: true,
                    timeOut: 10000
                };
                toastr.info(message, title, options);
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.notification = factory(window.jQuery);
    }
}));