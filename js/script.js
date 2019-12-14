
/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
**/
new WOW().init();

$('.works-wrapper').magnificPopup({
    delegate:'a',
    type: 'image',
    gallery: {
        enabled: 'true'
    }
});

$(document).ready(function(){
    $('#team-members').owlCarousel({
        autoplay: 2000,
        items: 3,
        loop: 'true',
        smartSpeed: 700,
        margin: 30
    });
});

$(document).ready(function(){
    $("#customer-reviews").owlCarousel({
        autoplay: 2000,
        items: 1,
        loop: 'true',
        smartSpeed: 700
    });
});
$('.counter').counterUp({
    time: 1500
});
$(document).ready(function(){
    $('.clients-container').owlCarousel({
        items: 6,
        autoplay: 2000,
        loop: 'true',
        smartSpeed: 700
    })
})