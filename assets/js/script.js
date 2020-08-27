$(document).ready(function() {

    var navigation = {};
    var interests = '.interests'
    var about = '.about-me'
    var contact = '.contact'
    var intro = '.intro'
    navigation[interests] = false;
    navigation[about] = false;
    navigation[contact] = false;
    navigation[intro] = true;

    $(".interests").toggle();
    $(".about-me").toggle();
    $(".contact").toggle();
    
    $('.intro-typeit').typeIt({
        strings: [
            "Seattle based",
            "Microsoft", 
            "Master's Student",
        ],
        speed: 130,
        breakLines: true,
        loop: false,
        waitUntilVisible: true
        });
    $('.interests-locations').typeIt({
        strings: [
            "San Francisco",
            "Los Angeles",
            "Seattle",
            "San Francisco",
            "Boston",
            "Philadelphia",
            "Washington D.C.",
            "Prague, Czech Republic",
            "Edinburgh, Scotland",
            "London, England",
            "Amsterdam, Netherlands",
            "Milan, Italy",
            "Copenhangen, Denmark"

        ],
        speed: 150,
        breakLines: false,
        loop: true,
        waitUntilVisible: true
        });;

    $("#nav-home").on("click", function(){
        for (var item in navigation) {
            if (navigation[item] == true) {
                $(item).toggle();
                $(intro).toggle();
                navigation[item] = false;
                navigation[intro] = true;
                break;   
            }
        }
    });

    $("#nav-interests").on("click", function(){
        for (var item in navigation) {
            if (navigation[item] == true) {
                $(item).toggle();
                $(interests).toggle();
                navigation[item] = false;
                navigation[interests] = true;
                break;   
            }
        }
    });

    $("#nav-about").on("click", function(){
        for (var item in navigation) {
            if (navigation[item] == true) {
                $(item).toggle();
                $(about).toggle();
                navigation[item] = false;
                navigation[about] = true;
                break;   
            }
        }
    });

    $("#nav-contact").on("click", function(){
        for (var item in navigation) {
            if (navigation[item] == true) {
                $(item).toggle();
                $(contact).toggle();
                navigation[item] = false;
                navigation[contact] = true;
                break;   
            }
        }
    });
});


