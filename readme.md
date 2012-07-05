# jQuery Flicker
## Make things flicker like broken lightbulbs

``` javascript

// Basic Usage:
// -------------------------------------------------- //

$(".selector").flicker();


// Options:
// ----------------------------------------------- //

$.fn.flicker.defaults = {
    minOpacity: 0.7,     // Opacity will not go below this value
    maxOpacity: 1,       // Opacity will not exceed this value
    transition: 200,     // The speed of the animation
    delay: 75,           // The time between changes
    probability: 0.1     // The probability of a flickering event
};


// Methods:
// -------------------------------------------------- //

$(".selector").flicker(); // Start
$(".selector").flicker("stop"); // Stop

```