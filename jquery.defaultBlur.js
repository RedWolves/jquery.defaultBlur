//
// jQuery defaultBlur - v1.1 - 4/19/2010
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
// version history:
//      v1.1 - added support for password type input fields.

(function($) {
    $.fn.defaultBlur = function(options) {
        var opts = $.extend({}, $.fn.defaultBlur.defaults, options);
        var s = $(this).selector, c = $(this).context;

        return this.each(function() {
            var $this = $(this);

            if ($this.val() == "" || $this.val() == opts.defaultText) {
                if ($this.attr("type") == "password") {
                    $(document).data(s + "password", true);
                    $this.replaceWith("<input type='text' id='" + $this.attr("id") + "' " + getAttrs($this.get(0).attributes) + "/>");
                    $this = $(s, c);
                } else {
                    $(document).data(s + "password", false);
                }
                $this.val(opts.defaultText);
                $this.addClass(opts.blurClass);
            }
            $(s, c).live("focusout", function() {
                if ($this.val() == "") {
                    $this.addClass(opts.blurClass);
                    if ($(document).data(s + "password") == true) {
                        $this.replaceWith("<input type='text' id='" + $this.attr("id") + "' " + getAttrs($this.get(0).attributes) + "/>");
                        $this = $(s, c);
                        $this.blur();
                    }
                    $this.val(opts.defaultText);
                }
            }).live("focusin", function() {
                $this.removeClass(opts.blurClass);
                if ($this.val() == opts.defaultText) {
                    if ($(document).data(s + "password") == true) {
                        $this.replaceWith("<input type='password' id='" + $this.attr("id") + "' " + getAttrs($this.get(0).attributes) + "/>");
                        $this = $(s, c);
                        $this.focus();
                    }
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

    function getAttrs(attrs) {
        var attrsToAppend = "";
        for (i = 0; i < attrs.length; i++) {
            if (attrs[i].nodeName != 'type' || attrs[i].nodeName != 'id') {
                attrsToAppend += attrs[i].nodeName + "=" + attrs[i].nodeValue + " ";
            }
        }
        return attrsToAppend;
    }

    $.fn.defaultBlur.defaults = {
        defaultText: 'Type here.',
        blurClass: ''
    };
})(jQuery);