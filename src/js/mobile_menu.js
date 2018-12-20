(function($) {

    "use strict"
    $(function() {
        $('.navbar__mobile__btn button').on('click', function() {
            $(this).toggleClass('is-active');
            $(this).parent('.navbar__mobile__btn')
                    .parent('.navbar__mobile__bar')
                    .parent('.navbar__mobile')
                    .toggleClass('is--menu')
        })
        $('._m_dropdown_trigger').on('click', function(e) {
            e.preventDefault()
            var prwe = $(this).parent().siblings('._m_dropdown_box')
            $('._m_dropdown_box').not(prwe).slideUp()
            $(this).parent().siblings('._m_dropdown_box').slideToggle()
        })
        
    })

})(jQuery)