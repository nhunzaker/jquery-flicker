// jQuery Flickr
// Causes an element to flicker like an old lightbulb
// version 0.1, November 1st, 2011
// by Nate Hunzaker

(function($) {

    $.fn.flicker = function(method) {

        var methods = {

            init : function(options) {

                this.flicker.settings = $.extend({}, this.flicker.defaults, options);

                return this.each(function() {

                    var $element = $(this), // reference to the jQuery version of the current DOM element
                         element = this;      // reference to the actual DOM element
                    
                    methods.flick($element);
                });

            },

            // Handle hollogram projection
            // A recursive function to simulate a flickering effect
            flick: function ($target) {
                
                var fn = arguments.callee,
                    probability = Math.random(),
                    transition = Math.random() * 200;

                // If the 'continue' property of deliberatly set to false, exit
                if (arguments.callee.continue === false) {
                    return false;
                }

                if (probability < 0.1) {
                    fn($target);
                } else {
                    $target.animate({ opacity: Math.random() + 0.7 }, transition).delay(Math.random() * transition).animate({ opacity: 1 }, transition, function() {
                        fn($target);
                    });
                }

            },

            stop: function() {
                methods.flick.continue = false;
            }

        }

        var helpers = {
            flickr_private_method: function() {
                // code goes here
            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in the flicker plugin!');
        }

    }

    $.fn.flicker.defaults = {
        minOpacity: 0.7,
        maxOpacity: 1
    }

    $.fn.flicker.settings = {}

})(jQuery);