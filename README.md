# Mask.Fx #

Extends MooTools official Mask plugin to add fading functionality:

http://github.com/mootools/mootools-more/blob/master/Source/Interface/Mask.js

## How to use ##

### Syntax ###

    new Mask.Fx(target[, options]);

### Arguments ###

1. target - (mixed) A string of the id for an Element or an Element reference to overlay; defaults to document.body
2. options - (object) a key/value set of options

### Options ###

- (inherited from Mask)
- fx - (object) options that will be passed to the Fx.Tween instance. Defaults to: {property: 'opacity', link: 'cancel'}
- start - (mixed) the start position for the Fx. Defaults to 0
- end - (mixed) the end position for the Fx. Defaults to 1

### Events ###

- (inherited from Mask)
- showEnd - (function) callback to execute when the animation ends after the mask is shown.
- hideEnd - (function) callback to execute when the animation ends after the mask is hidden.