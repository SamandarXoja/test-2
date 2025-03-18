document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        centeredSlides: true, 
        slidesPerView: "auto",
        spaceBetween: 10, 
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
