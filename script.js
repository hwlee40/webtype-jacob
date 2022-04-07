$(document).ready(function() {

    $('#darkmode').click(function(){
        console.log("hello world!");

        $('body').toggleClass('darkmode');
        $('a').toggleClass('darkmode');
    });
    $('#animate-title').click(function(){
        $('.xno').toggleClass('animate');
    })

    $('input[type=range]').on('input', function(){
        let inputType = $(this).attr('id');
        let inputValue = $(this).val();
        // console.log($(this).attr('id'));
        if (inputType === 'opsz'){
            $('#slider').css('--opsz-axis', inputValue);
        } else {
            $('#slider').css('--wght-axis', inputValue);
        }
    })

});

