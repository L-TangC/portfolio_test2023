$(document).ready(function () {
    $('.contact-buttom, .contactMe, .test').click(function (e) { 
        e.preventDefault();
        $('.contact,.shade').fadeIn(200);
    });
    $('.cancel_buttom,.shade').click(function (e) { 
        e.preventDefault();
        $('.contact,.shade').fadeOut(200);
    });
})