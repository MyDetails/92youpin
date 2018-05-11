// window.onload = function () {
    $(window).scroll(function () {
        let offsetTop = $(".navbar").offset().top;
        if (offsetTop >= 48) {
            $(".fixed-top").addClass("top-nav");
        } else {
            $(".fixed-top").removeClass("top-nav");
        }
    })
// }