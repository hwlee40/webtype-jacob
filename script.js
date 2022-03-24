$(document).ready(function() {
    $('#darkmode').click(function(){
        console.log("hello world!");

        $('body').toggleClass('darkmode');
        $('a').toggleClass('darkmode');
    });
});