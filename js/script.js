var burgermenu = false;
function burgerMenu(x) {
    if (burgermenu == false) {
        x.classList.toggle("change");
        $(' .first__block').addClass('on')
        burgermenu = true;
    }
    else {
        x.classList.toggle("change");
        $(' .first__block').removeClass('on')
        burgermenu = false;
    }
}
$('.slider').slick({
    arrows : true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<img src='img/first-slider-left.png' class='next' alt='arrow'>",
    nextArrow: "<img src='img/first-slider-rigth.png' class='last' alt='arrow'>",
});