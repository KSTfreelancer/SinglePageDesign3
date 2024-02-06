$(document).ready(function () {
    $(".nav_right img").click(function () {
        $(".nav_center").show(-500);
        $(".nav_right i").show();
        $(".nav_right img").hide();
        $(".nav_center").css("right", "0px");
    });
    $(".nav_right i").click(function () {
        $(".nav_center").hide(500);
        $(".nav_right img").show();
        $(".nav_right i").hide();
        $(".nav_center").css("right", "-200px");
    });
});
/*owl============*/
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
        }
    })
})
