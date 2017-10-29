
(function($){

    $.fn.makeMasonryGrid = function (options) {

        var container = $(this);
        var itemSelector = '.item' || options.itemSelector;
        var itemMinWidth = 200 || options.itemMinWidth;

        buildMasonry();

        function buildMasonry() {

            var maxColCount = container.width() / itemMinWidth;

            container.find(itemSelector).each(function(){

                var element = $(this);
                var elHeight = element.find('img').height();
                var elWidth = element.find('img').width();

                var rowStart = 1;
                var colStart = 1;

                if (elWidth > elHeight) {

                    colStart = Math.round(elWidth / elHeight);
                    if (colStart > maxColCount) {
                        colStart = Math.round(maxColCount);
                    }
                } else {

                    rowStart = Math.round(elHeight / elWidth);
                }

                element.attr("style", "grid-row-start: span " + rowStart + "; grid-column-start: span " + colStart)

            });
        }

        $(window).on('resize', function () {
            buildMasonry();
        });
    }
})( jQuery );