(function($){

    function handleFormSubmit(e){
        e.preventDefault();
        
        var form = $(this);
        var formId = form.find('[name="contact-form-id"]').val();
        var statusWrapper = form.find('.jetpack-form-ajax-status-wrapper');

        statusWrapper.empty();

        $.post(form.attr('action'), form.serialize(), function(response){
            var errors = $(response).find('ul.form-errors');

            if (errors.length > 0){
                statusWrapper.append(errors);
            } else {
                $(response).find('.jetpack-form-ajax-success-message').appendTo(statusWrapper);
            }
        });
    }

    $(document).ready(function(){
        $('<div />').attr({ class: 'jetpack-form-ajax-status-wrapper' }).insertBefore('.contact-submit');
        
        $('.contact-form').on('submit', handleFormSubmit);
    });
    
})(jQuery);