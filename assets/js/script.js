$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800);
        }
    });

});

$(document).scroll(function (e) {
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black");

    if (y > 300) {        
        $( ".card img" ).removeClass("d-none");
        $( ".card" ).fadeIn( 3000, function() {            
            $( "img" ).fadeIn( 1000);
        });
    };
})


