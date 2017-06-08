/*
 *
 * cowlik
 *
 */

cowlik = {
    VIEWPORT_MIN: 280,
    VIEWPORT_MED: 760,
    VIEWPORT_LRG: 980,
    VIEWPORT_MAX: 1200,
    init: function() {
        var cowlik = this;

        cowlik.nav = new cowlik.Nav();
    }
};

$(function() {
    cowlik.init();
});



/*
 *
 * nav
 *
 */

cowlik.Nav = function() {
    var nav = this;

    nav.elem = document.querySelector("nav");
    nav.elems = nav.elem.getElementsByTagName("li");

    nav.init();
};

cowlik.Nav.prototype = {
    init: function() {
        var nav = this;

        for (var i = 0; i < nav.elems.length; i++) {
            var elem = nav.elems[i];

            $(elem).on("touchstart click", function(event) {
                event.stopPropagation();
                $(this).addClass("selected");
            });

            $(elem).on("touchend", function(event) {
                event.stopPropagation();
                $(this).removeClass("selected");
            });
        }
    }
};