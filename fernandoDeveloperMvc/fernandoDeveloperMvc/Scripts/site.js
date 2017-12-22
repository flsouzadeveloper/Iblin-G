function index_Load() {
    $(document).ready(function () {
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 600, function () {
                    window.location.hash = hash;
                });
            }
        });

        $(window).scroll(function () {

            $('.hideme').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({ 'opacity': '1' }, 500);
                }
            });
        });
    });
}