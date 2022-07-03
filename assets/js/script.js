// Swiper JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});


// Portfolio Filter start
var containerEl1 = document.querySelector('.mixit_filter_items');
var mixer = mixitup(containerEl1, {
    animation: {
        // effects: 'fade translateZ(-100px)',
        // effects: 'fade rotateZ(180deg)',
        duration: 1000
    }
});
