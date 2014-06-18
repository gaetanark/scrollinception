var $;
$.scrollinception = function () {
    'use strict';
    var container = '<div class="scrollinception-container" />',
        scrollbutton = '<a href="#" class="scrollinception-button"><span class="scrollinception-icon">⇵</span></a>';

    $('[data-scrollinception]').wrap(container);
    $('.scrollinception-container').append(scrollbutton);

    $('.scrollinception-button').on('click', function (event) {
        event.preventDefault();
        var $btn = $(this);
        $(this).hide();
        $(window).on('scroll', function () {
            $btn.show();
            $(this).unbind('scroll');
        });
    });
};



