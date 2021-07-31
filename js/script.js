

$(document).ready(function () {
    //change navbar icon on click
    $('#navbar-button').click(function () {
        if ($('#navbar-button').children('span').hasClass('navbar-toggler-icon')) {
            $('#navbar-button').children('span').removeClass('navbar-toggler-icon');
            $('#navbar-button').children('span').addClass('fa fa-times fa-lg');
        }
        else if ($('#navbar-button').children('span').hasClass('fa fa-times fa-lg')) {
            $('#navbar-button').children('span').removeClass('fa fa-times fa-lg');
            $('#navbar-button').children('span').addClass('navbar-toggler-icon');
        }
    });

});


