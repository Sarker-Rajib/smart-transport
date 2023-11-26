var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    speed: 2000,

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },

    // effect: 'creative',
    // creativeEffect: {
    //     prev: {
    //         // will set `translateZ(-400px)` on previous slides
    //         translate: [0, 0, -400],
    //     },
    //     next: {
    //         // will set `translateX(100%)` on next slides
    //         translate: ['100%', 0, 0],
    //     },
    // },

    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
    },

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // }
});