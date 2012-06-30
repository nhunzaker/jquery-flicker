# jQuery Flicker
## Make things flicker like broken lightbulbs

``` javascript

$(".selector").flicker();

// Options
// ----------------------------------------------- //

$.fn.flicker.defaults = {
    minOpacity: 0.7,
    maxOpacity: 1
};


// Methods
// -------------------------------------------------- //

$(".selector").flicker(); // Start
$(".selector").flicker("stop"); // Stop

```

## For future releases:

- Greater control of flickering parameters
