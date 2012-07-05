// jQuery Flicker
//
// Causes an element to flicker like an old lightbulb
// Version 0.3, July 5th, 2012
//
// by Nate Hunzaker
// --------------------------------------------------------- //

(function($) {

    "use strict";

    $.fn.flicker = function(method) {
		
		// Default Values
		// ----------------------------------- //
		
		this.defaults = {
		    minOpacity: 0.7,
		    maxOpacity: 1,
		    transition: 200,
		    delay: 75,
		    probability: 0.1
		};

        // Public Methods
        // ----------------------------------- //
        
        var methods = {

            init : function(options) {

                var settings = $.extend({}, this.defaults, options);
                
                return this.each(function() {

                    var $element = $(this), // reference to the jQuery version of the current DOM element
                         element = this;    // reference to the actual DOM element
                        
                    $element.data("flicker", $.extend({}, settings, {
                        active: true
                    }));

                    methods.flick($element);
                    
                });

            },

            // Handle hollogram projection
            // A recursive function to simulate a flickering effect
            flick: function flick ($target) {
        
                var options     = $target.data("flicker"),
                    probability = Math.random(),
                    transition  = Math.random() * options.transition,
                    delay       = Math.random() * options.delay,
                    minOpacity  = 1 - (Math.random() * (1 - options.minOpacity)),
                    maxOpacity  = 1 - (Math.random() * (1 - options.maxOpacity));
                
                // If the 'continue' property of deliberatly set to false, exit
                if ($target.data("flicker").active === false) {
                    return false;
                }

                if (probability > options.probability) {
                    
                    setTimeout(function() {
                        flick($target);
                    }, delay);
                    
                } else {

                    $target.animate({ opacity: minOpacity}, transition)
                           .delay(delay)
                           .animate({ opacity: maxOpacity }, transition, function() {
                        
                        flick($target);
                        
                    });
                    
                }

            },

            stop: function() {
                this.each(function() {
                    $(this).text("stopped").data("flicker").active = false;
                });
            }

        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in the flicker plugin!');
        }

    };
    
})(window.jQuery);