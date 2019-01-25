// Active Item Menu
$(document).on('click', '.menu-content-a', function () {
    $('.sub-menu').removeClass('in');
});

$(document).on('click', 'body', function () {
    $('.sub-menu').removeClass('in');
});


// Scroll Top
$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.button-scrollToTop').fadeIn();
        } else {
            $('.button-scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.button-scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});