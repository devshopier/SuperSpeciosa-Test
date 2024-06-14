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
})