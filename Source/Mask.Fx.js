/*
---
description: Extends MooTools official Mask plugin to add fading functionality

license: MIT-style

authors:
- Amitay Horwitz

requires:
- more/1.3.1.1: [Mask]

provides:
- Mask.Fx

...
*/

Mask.Fx = new Class({

    Extends: Mask,

    options: {
        start: 0,
        end: 1,
        fx: {
            property: 'opacity',
            link: 'cancel'
        }
    },

    initialize: function(target, options){
        this.parent(target, options);
        this.element.set('tween', this.options.fx);
        this.element.get('tween').set(this.options.fx.property, this.options.start);
        this.element.setStyle('display', 'block');
    },

    showMask: function(){
        this.hidden = false;
        this.fireEvent('show');
        this.element.get('tween').start(this.options.end).chain(function() {
            this.fireEvent('showEnd');
        }.bind(this));
    },

    hideMask: function(){
        this.hidden = true;
        this.fireEvent('hide');
        this.element.get('tween').start(this.options.start).chain(function() {
            this.fireEvent('hideEnd');
        }.bind(this));
    }

});