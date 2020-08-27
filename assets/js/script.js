$(document).ready(function() {

    // String of the navigation tabs
    var navigation = {};
    var interests = '.interests'
    var about = '.about-me'
    var contact = '.contact'
    var intro = '.intro'
    var experience = '.experience'
    
    navigation[interests] = false;
    navigation[about] = false;
    navigation[contact] = false;
    navigation[experience] = false;
    navigation[intro] = true;

    // Mapping of navigation string to toggle elements
    var mapping = {};
    mapping[interests] = $(".interests");
    mapping[about] = $(".about-me");
    mapping[contact] = $(".contact");
    mapping[experience] = $(".experience");
    mapping[intro] = $(".intro");

    $(".interests").toggle();
    $(".about-me").toggle();
    $(".contact").toggle();
    $(".experience").toggle();
    
    $('.intro-typeit').typeIt({
        strings: [
            "Seattle based",
            "Software Engineer",
        ],
        speed: 130,
        breakLines: true,
        loop: false,
        waitUntilVisible: true
    });

    function toggleElements(elementOn) {
        for (var item in navigation) {
            if (item == elementOn && navigation[item] == false) {
                mapping[item].toggle();
                navigation[item] = true
            } else if (item != elementOn && navigation[item] == true) {
                mapping[item].toggle();
                navigation[item] = false
            }
        }
    };

    $("#nav-home").on("click", function(){
        toggleElements(intro);
    });

    $("#nav-interests").on("click", function(){
        toggleElements(interests);
    });

    $("#nav-about").on("click", function(){
        toggleElements(about);
    });

    $("#nav-contact").on("click", function(){
        toggleElements(contact);
    });

    $("#nav-experience").on("click", function(){
        toggleElements(experience);
    });
});


