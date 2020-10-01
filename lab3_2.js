(function($){
    $.fn.MySlider = function(interval, e, d) {
        var slides = $(this.selector).children();
        var amount = slides.length;

        var w = slides[0].width;
        var h = slides[0].height;
        var hw = h / 2;

        var eas = e;
        var dur = d;

        var iCur=0;
        var iNext=1;

        function run() {

            $(slides[iNext]).animate({
                opacity: 0,
                height: 0,
                top: hw,
            }, {
                duration: dur,
                specialEasing: {
                    height: eas
                }
            });

            $(slides[iCur]).animate({
                opacity: 0,
                height: 0,
                top: hw,
            }, {
                duration: dur,
                specialEasing: {
                    height: eas
                },
                complete: function() {

                    $(slides[iCur]).animate({
                        opacity: 0,
                        height: h,
                        top:0,
                    }, {
                        duration: dur,
                        specialEasing: {
                            height: eas
                        }
                    });

                    $(slides[iNext]).animate({
                        opacity: 1,
                        height: h,
                        top:0,
                    }, {
                        duration: dur,
                        specialEasing: {
                            height: eas
                        }
                    });

                    iCur++;
                    iNext++;
                    if (iCur >= amount) {
                        iCur = 0;
                    }
                    if (iNext >= amount) {
                        iNext = 0;
                    }
                }
            });

            // loop
            setTimeout(run, interval);
        }

        // first run
        if (amount > 1)
            setTimeout(run, dur / 2);

    };
})(jQuery);

// custom initialization
jQuery(window).load(function() {
    $('#slider1').MySlider(5000, 'linear', 1000);
    $('#slider2').MySlider(5000, 'easeOutCirc', 1000);
});