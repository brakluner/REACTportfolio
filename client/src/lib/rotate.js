import $ from 'jquery';
import 'webpack-jquery-ui/css';
import 'webpack-jquery-ui/sortable';

/*!
 * Rotate.js v1.0.0 (http://www.clarketravis.com)
 * Copyright 2015 Travis Clarke
 * Licensed under the MIT license
 * Modified by Brakluner
 */

export const rotate = () => {
    "use strict";

    $.fn.rotate = function (degrees, options) {

        var settings = $.extend({}, $.fn.rotate.defaults, options),
            endDeg = 0;

        degrees = degrees || $.fn.rotate.degrees;

        return this.each(function (i, el) {
            if ($(el).is(':animated')) { return;}

            endDeg = (el.deg || endDeg) + degrees;
            settings.step = function (now) {
                $(el).css('transform', 'rotate(' + now + 'deg)');
            };

            $(el).animate({deg: endDeg}, settings);
        });

    };

    $.fn.rotate.degrees = 360;

    $.fn.rotate.defaults = {
        duration: 1000,
        complete: function () { }
    };


};