///// PRELOADER //////////////////////

$(window).on('load', function () {
    $("#preloader").fadeOut(500);
    $('body').removeClass('preload');
    console.log("window loaded");
   });





////// sticky nav bar ////////

$(window).scroll(function () {
var scroll = $(window).scrollTop();
if (scroll >= 100) {
$("nav.navbar").addClass("sticky");
}
else {
$("nav.navbar").removeClass("sticky");
}
});

/////////  side bar menu ////////// 


$('button.navbar-toggler').click(function(){
console.log('click burgers');
$('.navbar-toggler i.las').toggleClass('la-bars la-times');
$('body').toggleClass('scroll-lock');

})


///////////// search bar open 
$('.search-open').click(function(){
console.log('clicked seach');
$('.search-bar').toggleClass('open');
$(this).parent.click(function(){
$('.search-bar').toggleClass('open');
});
})

$('.close-search').click(function(){
console.log('clicked seach close');
$('.search-bar').toggleClass('open');
})


// brand slider //
$(document).ready(function(){
$('.owl-carousel.brand-slider').owlCarousel({
loop:true,
margin:40,
items: 5,
stagePadding: 50,
nav:true,
autoplay:true,
autoplayTimeout:1500,
autoplayHoverPause:true,
responsive:{
    0:{
        items:2
    },
    576:{
        items:3
    },
    768:{
        items:4
    },
    992:{
        items:5
    }
}
})
});

// testimonial slider //
$(document).ready(function(){
$('#test-slider').owlCarousel({
loop:false,
center: true,
margin:100,
stagePadding: 50,
nav:true,
items: 1,
})
});


// product images slider //
$(document).ready(function(){
$('#product-slider').owlCarousel({
loop:false,
margin:100,
stagePadding: 0,
nav:false,
dots: false,
items: 1,
thumbs: true,
thumbsPrerendered: true
})
});

////// todays offer slider
$(document).ready(function(){
$('.slider-offer').owlCarousel({
loop:true,
center: true,
margin:100,
autoplay: true,
autoplayTimeout:1500,
autoplayHoverPause:true,
dots: true,
stagePadding: 50,
nav:false,
items: 1,
})
});

// testimonial slider //
$(document).ready(function(){
$('#category-slider').owlCarousel({
loop:true,
margin: 10,
stagePadding: 5,
nav:true,
responsive:{
    0:{
        items:2,
        margin: 5,
        stagePadding: 2,


    },
    576:{
        items:2
    },
    768:{
        items:3,
        margin: 10,
        stagePadding: 5,

    },
    992:{
        items:4
    }
}


})
});


/* menu sliding */

function menuSliding() {
$('.dropper').on('show.bs.dropdown', function (e) {

    if ($(window).width() > 320) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();

    } else {
        $(this).find('.dropdown-menu').first().stop(true, true).show();
    }
}

);
$('.dropper').on('hide.bs.dropdown', function (e) {
if ($(window).width() > 320) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
} else {
    $(this).find('.dropdown-menu').first().stop(true, true).hide();
}
});

}

$(function() {
menuSliding();
})

// Increase/Reduce product amount
// ------------------------------------------------------ //
$('.dec-btn').click(function () {
var siblings = $(this).siblings('input.quantity-no');
if (parseInt(siblings.val(), 10) >= 1) {
    siblings.val(parseInt(siblings.val(), 10) - 1);
}
});

$('.inc-btn').click(function () {
var siblings = $(this).siblings('input.quantity-no');
siblings.val(parseInt(siblings.val(), 10) + 1);
});