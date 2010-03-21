//
// jQuery defaultBlur - v1.0 - 3/21/2010
// http://ralphwhitbeck.com
//
// Copyright (c) 2010 Ralph Whitbeck
// Dual licensed under the MIT and GPL licenses.
//
// Description: use to make a input/textarea have a setable default
// value and a setable class that act as a label then will disappear 
// when the user goes to enter a real value into the textbox.
//
// usage: $("input").defaultBlur({
//            defaultText:'Default text',
//            blurClass:'className'
//         });
//
// Options:
//
//      defaultText: (string, default: "Type  here.", required)
//                   The text to be shown when there is no input value.
//
//      blurClass: (string, default: "") The css class that will
//                 style the default text.
//
//
// Demo:  http://jsbin.com/opita
//




(function($) {
    $.fn.defaultBlur = function(options) {
        var opts = $.extend({}, $.fn.defaultBlur.defaults, options);

        return this.each(function() {
            var $this = $(this);
            if ($this.val() == "" || $this.val() == opts.defaultText) {
                $this.val(opts.defaultText);
                $this.addClass(opts.blurClass);
            }
            $this.blur(function() {
                if ($this.val() == "") {
                    $this.addClass(opts.blurClass);
                    $this.val(opts.defaultText);
                }
            }).focus(function() {
                $this.removeClass(opts.blurClass);
                if ($this.val() == opts.defaultText) {
                    $this.val("");
                }
            });
            $this.closest("form").submit(function() {
                if ($this.val() == opts.defaultText) {
                    $this.val("");
                }
                return true;
            });
        });
    };

    $.fn.defaultBlur.defaults = {
        defaultText: 'Type here.',
        blurClass: ''
    };
})(jQuery);