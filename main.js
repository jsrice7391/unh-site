$(document).ready(function() {

    $(".cross").hide();
    $(".links").hide();
    $("#burger").click(function() {
        $(".links").slideToggle("slow", function() {
            $("#burger").hide();
            $(".cross").show();
            $(".links").css("margin-bottom", "10%");
        });
    });

    $(".cross").click(function() {
        $(".links").slideToggle("slow", function() {
            $(".cross").hide();
            $("#burger").show();
        });
    });

});