$(document).ready(function(){
    $('.remove_all_products button').on('click', function(){
        $.ajax({
            type: "POST",
            url: '/cart/clear.js',
            data: '',
            dataType: 'json',
            success: function() {
                location.reload();
            },
            error: function(XMLHttpRequest, textStatus) {
              /* error code */
            }
        });
    })

    $('.extra-info-title a').on('click', function(){
        $('.extra-info-content').slideToggle();
        $(this).toggleClass('rotate-icon');
    })
})