
/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
**/

$('.works-wrapper').magnificPopup({
    delegate:'a',
    type: 'image'
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