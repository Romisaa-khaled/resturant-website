
$(document).ready(function(){

    $('.like-btn').click(function(e){
        e.preventDefault();
         console.log('string');

        if($(this).hasClass('like'))
        {
            $(this).removeClass('like');
            $(this).addClass('dislike');
            $(this).html('Dislike');
        }
        else
        {
            $(this).removeClass('dislike');
            $(this).addClass('like');
            $(this).html('Like');
        }

    });
});
$('#submit_form').submit(function(e){
    e.preventDefault();

    if(!$('input[name=name]').val()){
        alert('Name field is required.');
        return;
    }

    if(!$('input[name=email]').val()){
        alert('Email field is required.');
        return;
    }

    if(!$('input[name=phone]').val()){
        alert('Phone field is required.');
        return;
    }

    if(!$('textarea[name=message]').val()){
        alert('Message field is required.');
        return;
    }

    $('#success_message').show();
});
function redirectToAnotherPage(string) {
   
    window.location.href = string;

}



   